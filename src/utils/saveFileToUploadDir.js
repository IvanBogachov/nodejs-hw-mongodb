import path from 'node:path';
import fs from 'node:fs/promises';
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from '../constants/index.js';
import { getEnvVar } from './getEnvVar.js';

export const saveFileToUploadDir = async (file) => {
  const newPath = path.join(UPLOAD_DIR, file.filename);
  await fs.rename(file.path, newPath);

  // await fs.rename(
  //   path.join(TEMP_UPLOAD_DIR, file.filename),
  //   path.join(UPLOAD_DIR, file.filename),
  // );

  return `${getEnvVar('APP_DOMAIN')}/uploads/${file.filename}`;
};
