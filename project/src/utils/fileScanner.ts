export async function scanFiles(fileList: FileList): Promise<string[]> {
  const files: string[] = [];
  
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];
    if (file.name.endsWith('_hi.yft')) {
      files.push(file.name.replace('_hi.yft', ''));
    }
  }
  
  return files;
}