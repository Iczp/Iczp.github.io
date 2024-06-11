// import fs from 'fs';

// export const useFileStats = (filePath: string) => {
//   try {
//     console.log('filePath', filePath);
//     const stats = fs.statSync(filePath);

//     console.log('File information:');
//     console.log(`File size: ${stats.size} bytes`);
//     console.log(`Last modified: ${stats.mtime}`);
//     console.log(`Created: ${stats.birthtime}`);

//     return {
//       size: stats.size,
//       mtime: stats.mtime,
//       birthtime: stats.birthtime,
//     };
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };
