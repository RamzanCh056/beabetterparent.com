// Generate a device fingerprint based on browser characteristics
export function getDeviceFingerprint(): string {
  if (typeof window === 'undefined') {
    return 'unknown';
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx?.fillText('Device fingerprint', 2, 2);
  const canvasFingerprint = canvas.toDataURL();

  // Safely access deviceMemory (not in all browsers/TypeScript definitions)
  const deviceMemory = (navigator as any).deviceMemory || 0;
  
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width + 'x' + screen.height,
    new Date().getTimezoneOffset(),
    canvasFingerprint,
    navigator.hardwareConcurrency || 0,
    deviceMemory,
  ].join('|');

  // Create a simple hash
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  return Math.abs(hash).toString(36);
}

