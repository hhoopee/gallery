jQuery("#nanogallery").nanogallery2({
    // CONTENT SOURCE

    
    // GALLERY AND THUMBNAIL LAYOUT
    galleryMosaic : [                       // default layout
        { c: 1, r: 1, w: 2, h: 2 }, 
        { c: 3, r: 1, w: 2, h: 1 },
        { c: 5, r: 1, w: 1, h: 2 },
        { c: 3, r: 2, w: 1, h: 1 },
        { c: 4, r: 2, w: 1, h: 2 },
        { c: 1, r: 3, w: 3, h: 1 },
        { c: 5, r: 3, w: 1, h: 1 },
        { c: 1, r: 4, w: 1, h: 1 },
        { c: 3, r: 4, w: 3, h: 1 },
        { c: 2, r: 4, w: 1, h: 2 },
        { c: 1, r: 5, w: 1, h: 2 },
        { c: 3, r: 5, w: 1, h: 1 },
        { c: 2, r: 6, w: 2, h: 1 },
        { c: 4, r: 5, w: 2, h: 2 }
    ],
    galleryMosaicXS : [                     // layout for XS width
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 1, h: 1, c: 3, r: 4 }
    ],
    galleryMosaicSM : [                     // layout for SM width
      { w: 2, h: 2, c: 1, r: 1 },
      { w: 1, h: 1, c: 3, r: 1 },
      { w: 1, h: 1, c: 3, r: 2 },
      { w: 1, h: 2, c: 1, r: 3 },
      { w: 2, h: 1, c: 2, r: 3 },
      { w: 1, h: 1, c: 2, r: 4 },
      { w: 1, h: 1, c: 3, r: 4 }
    ],
    galleryMaxRows: 1,
    galleryDisplayMode: 'rows',
    gallerySorting: 'random',
    thumbnailDisplayOrder: 'random',

    thumbnailHeight: '180', thumbnailWidth: '220',
    thumbnailAlignment: 'scaled',
    thumbnailGutterWidth: 0, thumbnailGutterHeight: 0,
    thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,


    // DISPLAY ANIMATION
    // for gallery
    galleryDisplayTransitionDuration: 1500,
    // for thumbnails
    thumbnailDisplayTransition: 'imageSlideUp',
    thumbnailDisplayTransitionDuration: 1200,
    thumbnailDisplayTransitionEasing: 'easeInOutQuint',
    thumbnailDisplayInterval: 60,

    // THUMBNAIL HOVER ANIMATION
    thumbnailBuildInit2: 'image_scale_1.15',
    thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
    touchAnimation: true,
    touchAutoOpenDelay: 500,

    // LIGHTBOX
    viewerToolbar: { display: false },
    viewerTools:    {
      topLeft:   'label',
      topRight:  'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton'
    },

    // GALLERY THEME
    galleryTheme : { 
      thumbnail: { background: '#111' },
    },
              
    // DEEP LINKING
    locationHash: true
  });