interface FounderBridgeProps {
  children: string
}

export function FounderBridge({ children }: FounderBridgeProps) {
  return <p className="founder-bridge">{children}</p>
}
