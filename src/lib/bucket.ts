import { createModel } from "mongoose-gridfs";
let _bucket: any;
export const Bucket = () => {
  if (_bucket) return _bucket;
  else {
    _bucket = createModel();
    return _bucket;
  }
};
