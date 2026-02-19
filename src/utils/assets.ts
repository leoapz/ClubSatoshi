/**
 * Get the correct asset path.
 * In production on Vercel, assets are served from the root.
 * @param path - The asset path starting with /
 * @returns The full path
 */
export function getAssetPath(path: string): string {
    return path;
}
