import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-blue-800">Booking</div>
        <div className="col-span-2 bg-yellow-600 ">Map</div>
      </div>
    </div>
  );
}
