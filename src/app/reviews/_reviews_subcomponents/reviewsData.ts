import { existsSync, readdirSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

function getFileNamesInFolder(folderPath: string): Array<string> {
  try {
    if (existsSync(folderPath)) {
      const files: Array<string> = readdirSync(folderPath);
      return files;
    }
    console.log('does not exist');
    return [];

  } catch (error) {
    console.error('Error reading folder:', error);
    return [];
  }
}

const reviews: Array<string> = getFileNamesInFolder('public/(reviews_data)');

const reviewPaths: Array<string> = reviews.map((review: string) => `/(reviews_data)/${review}`);

export default reviewPaths;
