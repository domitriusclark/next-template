import { useMedia } from 'use-cloudinary';

export default function Home() {
  const [{ getImage }] = useMedia({ cloud_name: "testing-hooks-upload" });
  return <img src={getImage({
    public_id: "test toasts",
    transform_options: {
      height: 0.5
    }
  })} />
}
