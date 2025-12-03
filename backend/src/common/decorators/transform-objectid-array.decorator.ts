import { Transform } from 'class-transformer';

export function TransformObjectIdArray() {
  return Transform(({ value }) => {
    if (!Array.isArray(value)) return value;
    return value.map((v) => (typeof v === 'string' ? v : v?._id));
  });
}
