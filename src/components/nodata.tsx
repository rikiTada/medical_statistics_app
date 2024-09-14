type NoDataProps = {
  message?: string;
};

export function NoData({ message }: NoDataProps) {
  return (
    <div>
      <h1 className="text-lg">データが見つかりませんでした。</h1>

      {message && (
        <div className="my-4 py-4 px-8 rounded border border-destructive bg-card">
          <span className="text-destructive">{message}</span>
        </div>
      )}
    </div>
  );
}
