interface Props {
  message: string;
}

export function GeneralError({ message }: Props) {
  return (
    <div className="flex justify-center items-center min-h-screen text-red-500">
      مشکلی رخ داده است: {message}
    </div>
  );
}
