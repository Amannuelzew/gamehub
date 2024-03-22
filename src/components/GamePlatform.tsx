import PlatformData from "../data/PlatformsData";
interface queryType {
  onSelect: (PlatformData: number | undefined) => void;
}
const GamePlatform = ({ onSelect }: queryType) => {
  const handlePlatformChange = (name: string) => {
    if (name === "All") return onSelect(undefined);
    onSelect(PlatformData.find((p) => p.name === name)?.id || 0);
  };

  return (
    <div className="dropdown m-4">
      <select
        title="platform"
        className="bg-base-200 p-2"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handlePlatformChange(e.target.value)
        }
      >
        {PlatformData.map((platform) => (
          <option key={platform.id}>{platform.name}</option>
        ))}
      </select>
    </div>
  );
};

export default GamePlatform;
