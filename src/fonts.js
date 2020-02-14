exports.makeGoogleImport = (font) => `https://fonts.googleapis.com/css?family=${font.replace(/ /g, '+')}&display=swap`;
exports.header = [
  'Abril Fatface',
  'Alfa Slab One',
  'Archivo Black',
  'Bowlby One SC',
  'Cedarville Cursive',
  'Damion',
  'Fredoka One',
  'Galada',
  'Modak',
  'Orbitron',
  'Parisienne',
  'Permanent Marker',
];

exports.bodyStack = [
  'Georgia, serif',
  '"Palatino Linotype", "Book Antiqua", Palatino, serif',
  '"Times New Roman", Times, serif',
  'Arial, Helvetica, sans-serif',
  '"Arial Black", Gadget, sans-serif',
  '"Comic Sans MS", cursive, sans-serif',
  '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  'Tahoma, Geneva, sans-serif',
  '"Trebuchet MS", Helvetica, sans-serif',
  'Verdana, Geneva, sans-serif',
  '"Courier New", Courier, monospace',
  '"Lucida Console", Monaco, monospace',
]
