# xjst-benchmarks

__Build assets (ddsl templates)__
```
npm run build-assets
```

## node

```
npm run start
```

__node v4.4.6__

                       | mean time | ops/sec
-----------------------|-----------|--------           
__react__      v15.1.0 | 16.014ms  | 62
__react-xjst__ latest  | 22.795ms  | 44

## browser

### Build bundle.js for browser

```
npm run browser-build
```

### Open static/index.html

__chrome 51.0.2704.103__

                       | mean time | ops/sec
-----------------------|-----------|--------           
__react__      v15.1.0 | 43.931ms  | 23
__react-xjst__ latest  | 53.924ms  | 19
