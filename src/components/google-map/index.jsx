import { useState, useEffect, useRef, Children, isValidElement, cloneElement } from "react"
import { Wrapper } from "@googlemaps/react-wrapper"
import { createCustomEqual } from "fast-equals"
import { isLatLngLiteral } from "@googlemaps/typescript-guards"
import MapMarker from "../../assets/icons/map-marker.svg"
import CirclePlusIcon from "../../assets/icons/circle-plus-icon.svg"
import CircleMinusIcon from "../../assets/icons/circle-minus-icon.svg"

const render = (status) => {
  return <h1 className="mt-[20px] text-center">{status}...</h1>
}

const GoogleMap = ({ location }) => {
  const apiKey = process.env.REACT_APP_API_KEY
  const [zoom, setZoom] = useState(18)
  const [center, setCenter] = useState(location)
  const [position] = useState(location)

  const onIdle = (map) => {
    setZoom(map.getZoom())
    setCenter(map.getCenter())
  }

  return (
    <div className="relative h-full w-full">
      <Wrapper apiKey={apiKey} render={render}>
        <Map zoom={zoom} center={center} onIdle={onIdle} disableDefaultUI style={{ width: "100%", height: "100%" }}>
          <Marker position={position} icon={MapMarker} />
        </Map>
      </Wrapper>

      <button className="absolute right-4 bottom-16 rounded-full shadow" onClick={() => setZoom(zoom + 1)}>
        <img className="w-9" src={CirclePlusIcon} alt="zoom in" />
      </button>
      <button className="absolute right-4 bottom-5 rounded-full bg-white shadow" onClick={() => setZoom(zoom - 1)}>
        <img className="w-9" src={CircleMinusIcon} alt="zoom out" />
      </button>
    </div>
  )
}

const Map = ({ style, onIdle, children, ...options }) => {
  const ref = useRef(null)
  const [map, setMap] = useState()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}))
    }
  }, [ref, map])

  useEffect(() => {
    if (map) {
      window.google.maps.event.clearListeners(map, "idle")
      if (onIdle) {
        map.addListener("idle", () => onIdle(map))
      }
    }
  }, [map, onIdle])

  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options)
    }
  }, [map, options])

  return (
    <>
      <div ref={ref} style={style} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { map })
        }
      })}
    </>
  )
}

const Marker = (options) => {
  const [marker, setMarker] = useState()

  useEffect(() => {
    if (!marker) {
      setMarker(new window.google.maps.Marker({ animation: window.google.maps.Animation.BOUNCE }))
    }
    return () => {
      if (marker) {
        marker.setMap(null)
      }
    }
  }, [marker])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options)
    }
  }, [marker, options])

  return null
}

const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
  if (isLatLngLiteral(a) || a instanceof window.google.maps.LatLng || isLatLngLiteral(b) || b instanceof window.google.maps.LatLng) {
    return new window.google.maps.LatLng(a).equals(new window.google.maps.LatLng(b))
  }
  return deepEqual(a, b)
})

function useDeepCompareMemoize(value) {
  const ref = useRef()
  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value
  }
  return ref.current
}

function useDeepCompareEffectForMaps(callback, dependencies) {
  useEffect(callback, dependencies.map(useDeepCompareMemoize))
}

export default GoogleMap
