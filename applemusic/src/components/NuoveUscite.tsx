import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

interface Track {
  id: number
  title: string
  artist: {
    name: string
  }
  album: {
    cover_medium: string
  }
}

const NuoveUscite = () => {
  const [tracks, setTracks] = useState<Track[]>([])

  const fetchTracks = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=thasupreme"
      )

      if (response.ok) {
        const data = await response.json()
        setTracks(data.data)
      } else {
        throw new Error("Errore")
      }
    } catch (error) {
      console.error("Errore durante la fetch:", error)
    }
  }

  useEffect(() => {
    fetchTracks()
  }, [])

  return (
    <Container fluid className="bg-dark">
      <Row>
        <h3 className="text-light mt-5">Nuove uscite &gt;</h3>

        {tracks.slice(0, 6).map((track) => (
          <Col key={track.id} xs="4" md="4" lg="3" className="flex-shrink-0">
            <div>
              <img
                src={track.album.cover_medium}
                alt="cover"
                className="w-100 rounded-3"
              />
              <p className="text-light fw-bold mt-2 mb-1 text-truncate">
                {track.title}
              </p>
              <p className="text-light ">{track.artist.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default NuoveUscite
