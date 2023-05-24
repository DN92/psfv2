import {existsSync, readdirSync} from 'fs';
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid';

function getFileNamesInFolder(folderPath: string): Array<string>{
  try {
    if (existsSync(folderPath)) {
      const files = readdirSync(folderPath);
      return files;
    } else {
      console.log('does not exist')
      return [];
    }
  } catch (error) {
    console.error('Error reading folder:', error);
    return [];
  }
}

const reviews = getFileNamesInFolder(`public/(reviews_data)`)

const reviewPaths = reviews.map(review => `/(reviews_data)/${review}`)

// console.log(reviewPaths)

export default reviewPaths