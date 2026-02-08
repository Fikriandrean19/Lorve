export async function getCarDetail(carId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/car/${carId}`,
    {
      cache: "no-store", 
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch car")
  }

  return res.json()
}
