async function getData(_id) {
  const res = await fetch(`http://localhost:3000/api/available-works/${_id}`);
  console.log("LOOK HERE", res);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // console.log("error", res.ok);
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function AvailableWorksDetails({ params: { id } }) {
  const data = getData(id);
  return <h1>{data.price}</h1>;
}
