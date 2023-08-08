declare module "file-saver" {
  const saveAs: {
    (
      data: Blob | File | string,
      filename?: string,
      options?: FileSaver.FileSaverOptions,
    ): void;
    (
      data: Blob | File | string,
      filename?: string,
      disableAutoBOM?: boolean,
    ): void;
  };
  export = saveAs;
}
