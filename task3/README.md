### Summary

This PR improves the performance score of the Dashboard page by addressing long main-thread blocking and applying frontend optimization techniques. Previously, a heavy for-loop ran synchronously inside `useEffect`, resulting in a high Total Blocking Time (TBT) and poor Lighthouse score.

### Key Improvements

- Offloaded heavy loop to a Web Worker to avoid main-thread blocking
- Ensured Web Worker lifecycle is properly managed (terminated after use)
- Added preload hints for critical resources (e.g., fonts and worker script)
- Verified tree-shaking and minification in build configuration

### Results

- Performance score improved
- TBT significantly reduced
- UI remains fully responsive during heavy calculations
- Time to Interactive (TTI) and First Contentful Paint (FCP) improved
