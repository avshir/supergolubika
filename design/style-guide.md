# style-guide project
blueberry,  blueberry harvest, planting, farmer

## Layout
- Mobile: 320px
- Desktop: 1280px - max-w-7xl / 80rem

## Colors

### Palette
palette-golubika
https://coolors.co/2f3e56-c6d2e6-cae5c7-ead4c2-454545-f5f5f5
#2f3e56, #c6d2e6, #cae5c7, #ead4c2, #454545, #f5f5f5

### Primary
- primary (DEFAULT), dark: #2f3e56", prussian-blue => colors.blue[950], //#172554 - text-body, h2, h3, text-button, bg-footer, fill-icon

- accent-1 (DEFAULT): #c6d2e6, lavender => colors.blue[300], //#93c5fd - (button, элементы навигации) bg-button, text-button, h2, h3, text-accent, border-button, navlink, navlink-hover, bg-icon

- accent-2: green, #cae5c7  => #A3D29D - navlink-hover, bg-card, img, bg-icon-hover

- accent-3: beige, #ead4c2 => #E5CAB3  - bg-card, text-accent (not used!)

### Neutral
<!-- in config сolors.gray change to на colors.neutral -->
- gray-light: #f5f5f5, colors.neutral[100] - bg-body
- gray-: #d4d4d4, colors.neutral[300] - divider, border in input
- gray-middle: #525252, colors.neutral[600] - тест paragraf, второстепенные ссылки навигации


### Other
- secondary: { ...colors.blue, DEFAULT: colors.blue[300] } (not used!)

- selection:bg-accent 
- selection:text-primary 

- Link, a -  as className="text-primary hover:text-primary/80"

### SVG 
- size-6 fill-primary hover:fill-accent

## Inspiration
https://www.boobook.world/contact
```javascript
:root {
   --ghost-white: #f4eff5;(body bg)
   --deep-purple: #190c39; (body color, text, заголовки)
   --black: black;
   --peach: #f2bd9e; (цветные блоки)
   --light-grey: #f4f4f4;
   --digital-violet: #ba9afd; (button, элементы навигации)
   --white: white;
   --soft-grey: #75727d; (текст paragraf, второстепенные ссылки навигации)
  }
hover - светлее, добавлена прозрачность
```

https://www.boobook.world/
- [palette boobook.world](https://coolors.co/palette/2c1e49-c098fe-f4eff5-fcbb9a-473656)

https://www.superborowka.pl/
- [palette superborowka.pl](https://coolors.co/333333-eec344-737373-cccccc-fbfbfb)