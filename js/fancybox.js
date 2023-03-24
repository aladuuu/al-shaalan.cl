Fancybox.bind("[data-fancybox]", {
    closeButton: false,
    Thumbs: {
        minCount: 3,
        type: "classic",
        showOnStart: false,
    },
    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: [
              "iterateZoom",
              "fullscreen",
              "thumbs",
              "close",
            ],
        },
    },   
});