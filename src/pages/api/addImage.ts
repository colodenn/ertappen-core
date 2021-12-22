// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import formidable, { File } from 'formidable';
import fs from 'fs';
import sizeOf from 'image-size';
import { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '@/utils/client';
export const config = {
  api: {
    bodyParser: false,
  },
};

const getUser = async (token: string) => {
  const { data, error } = await supabase.auth.api.getUser(token);

  if (error) {
    throw error;
  }

  return data;
};

export default async function hello(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm();
  const token = req.headers.token;
  const user = await getUser(token as string);

  form.parse(req, async (err, fields, files) => {
    const _filepath = files.file as File;
    const filepath = _filepath.filepath;

    const _filename = files.file as File;
    const filename = _filename.originalFilename;

    const fileData = fs.readFileSync(filepath);
    const dimensions = sizeOf(fileData);

    await supabase.storage
      .from('images')
      .upload(`${user?.id}/${filename}`, fileData, {
        contentType: 'image/jpg',
        cacheControl: '3600',
        upsert: false,
      });

    const { signedURL } = await supabase.storage
      .from('images')
      .createSignedUrl(`${user?.id}/${filename}`, 6000000);
    const { data: data2 } = await supabase
      .from('images')
      .insert({
        image_url: signedURL,
        user_id: user?.id,
        name: filename,
        width: dimensions.width,
        height: dimensions.height,
      });

    res.send(data2);
  });
}
