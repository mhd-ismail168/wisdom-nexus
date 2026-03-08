"use client"

import { motion } from "motion/react"
import { useState, useEffect, useMemo } from "react"

/* ── Seed-based deterministic random for SSR/CSR parity ── */
function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807 + 0) % 2147483647
    return (s - 1) / 2147483646
  }
}

/* ── Geometric Grid Paths ── */
function GeometricPaths() {
  const paths = useMemo(() => {
    const rand = seededRandom(42)
    const gridSize = 60
    const result: { id: string; d: string; delay: number }[] = []
    for (let x = 0; x < 13; x++) {
      for (let y = 0; y < 8; y++) {
        if (rand() > 0.7) {
          result.push({
            id: `grid-${x}-${y}`,
            d: `M${x * gridSize},${y * gridSize} L${(x + 1) * gridSize},${y * gridSize} L${(x + 1) * gridSize},${(y + 1) * gridSize} L${x * gridSize},${(y + 1) * gridSize} Z`,
            delay: rand() * 5,
          })
        }
      }
    }
    return result
  }, [])

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 480" preserveAspectRatio="xMidYMid slice">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.6, 0] }}
          transition={{ duration: 8, delay: path.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  )
}

/* ── Organic Flow Paths ── */
function FlowPaths() {
  const flowPaths = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const amplitude = 50 + i * 10
      const offset = i * 60
      return {
        id: `flow-${i}`,
        d: `M-100,${200 + offset} Q200,${200 + offset - amplitude} 500,${200 + offset} T900,${200 + offset}`,
        strokeWidth: 1 + i * 0.3,
        opacity: 0.1 + i * 0.05,
        delay: i * 0.8,
      }
    })
  }, [])

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
      {flowPaths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0.8, 0], opacity: [0, path.opacity, path.opacity * 0.7, 0] }}
          transition={{ duration: 15, delay: path.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  )
}

/* ── Neural Network Paths ── */
function NeuralPaths() {
  const { nodes, connections } = useMemo(() => {
    const rand = seededRandom(137)
    const n = Array.from({ length: 20 }, (_, i) => ({
      x: rand() * 800,
      y: rand() * 600,
      id: `node-${i}`,
    }))
    const conns: { id: string; d: string; delay: number }[] = []
    n.forEach((node, i) => {
      n.forEach((other, j) => {
        if (i >= j || conns.length >= 30) return
        const dist = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2)
        if (dist < 120 && rand() > 0.6) {
          conns.push({
            id: `conn-${i}-${j}`,
            d: `M${node.x},${node.y} L${other.x},${other.y}`,
            delay: rand() * 10,
          })
        }
      })
    })
    return { nodes: n, connections: conns }
  }, [])

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      {connections.map((conn) => (
        <motion.path
          key={conn.id}
          d={conn.d}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: 6, delay: conn.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="2"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 1.2, 1], opacity: [0, 0.6, 0.8, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  )
}

/* ── Spiral Paths ── */
function SpiralPaths() {
  const spirals = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => {
      const centerX = 400 + (i % 4 - 1.5) * 200
      const centerY = 300 + Math.floor(i / 4 - 0.5) * 200
      const radius = 80 + i * 15
      const turns = 3 + i * 0.5

      let path = `M${centerX + radius},${centerY}`
      for (let angle = 0; angle <= turns * 360; angle += 5) {
        const radian = (angle * Math.PI) / 180
        const currentRadius = radius * (1 - angle / (turns * 360))
        const x = centerX + currentRadius * Math.cos(radian)
        const y = centerY + currentRadius * Math.sin(radian)
        path += ` L${x},${y}`
      }
      return { id: `spiral-${i}`, d: path, delay: i * 1.2 }
    })
  }, [])

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
      {spirals.map((spiral) => (
        <motion.path
          key={spiral.id}
          d={spiral.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0], rotate: [0, 360] }}
          transition={{
            pathLength: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            delay: spiral.delay,
          }}
        />
      ))}
    </svg>
  )
}

/* ── Exported Background Component ── */
export default function BackgroundPaths({
  /** Which pattern to show. Omit to auto-cycle.  */
  pattern,
  /** Extra className on the wrapper (e.g. to control opacity). */
  className,
}: {
  pattern?: "neural" | "flow" | "geometric" | "spiral"
  className?: string
}) {
  const [currentPattern, setCurrentPattern] = useState(0)
  const patterns = ["neural", "flow", "geometric", "spiral"] as const

  useEffect(() => {
    if (pattern) return                       // fixed pattern, no cycling
    const id = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % patterns.length)
    }, 12000)
    return () => clearInterval(id)
  }, [pattern])

  const activeIndex = pattern ? patterns.indexOf(pattern) : currentPattern

  const renderPattern = () => {
    switch (activeIndex) {
      case 0: return <NeuralPaths />
      case 1: return <FlowPaths />
      case 2: return <GeometricPaths />
      case 3: return <SpiralPaths />
      default: return <NeuralPaths />
    }
  }

  return (
    <div
      className={`absolute inset-0 pointer-events-none text-[var(--color-accent-gold)] opacity-[0.30] ${className ?? ""}`}
      aria-hidden="true"
    >
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {renderPattern()}
      </motion.div>

      {/* Soft edge-fade so paths don't feel clipped */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-section)] via-transparent to-[var(--color-bg-section)] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-section)] via-transparent to-[var(--color-bg-section)] opacity-20" />
    </div>
  )
}
