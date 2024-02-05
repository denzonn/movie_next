export const getData = async(url: string) => {
  const res = await fetch(
    url, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc3YjdjMzgxMGFhMTAyZGI3MTQyYWFjMjBlNjQwNSIsInN1YiI6IjY0ZTAzNjdlMzcxMDk3MDBmZmJhMDJlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1VC-eGJ4mjX79BtO8Cz1Pxh5gA4sAOsizchA-1_a7XU`,
        Accept: 'application/json'
      }
    }
  );

  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}
