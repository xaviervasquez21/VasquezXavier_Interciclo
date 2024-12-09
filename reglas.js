const reglas = [
  // Aquí defines las reglas como en tu código original.
  // UP, RIGHT, DOWN, LEFT
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, // Tile 0
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 0 }, // Tile 01
  { UP: 1, RIGHT: 1, DOWN: 0, LEFT: 0 }, // Tile 02
  { UP: 0, RIGHT: 1, DOWN: 1, LEFT: 0 }, // Tile 03
  { UP: 0, RIGHT: 0, DOWN: 1, LEFT: 1 }, // Tile 04
  { UP: 1, RIGHT: 0, DOWN: 0, LEFT: 1 }, // Tile 05
  { UP: 1, RIGHT: 1, DOWN: 1, LEFT: 0 }, // Tile 06
  { UP: 0, RIGHT: 1, DOWN: 1, LEFT: 1 }, // Tile 07
  { UP: 1, RIGHT: 0, DOWN: 1, LEFT: 1 }, // Tile 08
  { UP: 1, RIGHT: 1, DOWN: 0, LEFT: 1 }, // Tile 09
  { UP: 1, RIGHT: 0, DOWN: 0, LEFT: 0 }, // Tile 10
  { UP: 0, RIGHT: 1, DOWN: 0, LEFT: 0 }, // Tile 11
  { UP: 0, RIGHT: 0, DOWN: 1, LEFT: 0 }, // Tile 12
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 1 }, // Tile 13
  { UP: 1, RIGHT: 1, DOWN: 1, LEFT: 1 }, // Tile 14

  { UP: 3, RIGHT: 0, DOWN: 3, LEFT: 0 }, // Tile 15
  { UP: 4, RIGHT: 0, DOWN: 4, LEFT: 0 }, // Tile 16
  { UP: 0, RIGHT: 3, DOWN: 0, LEFT: 3 }, // Tile 17
  { UP: 0, RIGHT: 4, DOWN: 0, LEFT: 4 }, // Tile 18
  { UP: 3, RIGHT: 0, DOWN: 0, LEFT: 3 }, // Tile 19
  { UP: 0, RIGHT: 0, DOWN: 3, LEFT: 4 }, // Tile 20
  { UP: 0, RIGHT: 4, DOWN: 4, LEFT: 0 }, // Tile 21
  { UP: 4, RIGHT: 3, DOWN: 0, LEFT: 0 }, // Tile 22
  { UP: 4, RIGHT: 0, DOWN: 0, LEFT: 4 }, // Tile 23
  { UP: 0, RIGHT: 0, DOWN: 4, LEFT: 3 }, // Tile 24
  { UP: 0, RIGHT: 3, DOWN: 3, LEFT: 0 }, // Tile 25
  { UP: 3, RIGHT: 4, DOWN: 0, LEFT: 0 }, // Tile 26

  { UP: 3, RIGHT: 0, DOWN: 0, LEFT: 0 }, // Tile 27
  { UP: 4, RIGHT: 0, DOWN: 0, LEFT: 0 }, // Tile 28
  { UP: 0, RIGHT: 3, DOWN: 0, LEFT: 0 }, // Tile 29
  { UP: 0, RIGHT: 4, DOWN: 0, LEFT: 0 }, // Tile 30
  { UP: 0, RIGHT: 0, DOWN: 4, LEFT: 0 }, // Tile 31
  { UP: 0, RIGHT: 0, DOWN: 3, LEFT: 0 }, // Tile 32
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 4 }, // Tile 33
  { UP: 0, RIGHT: 0, DOWN: 0, LEFT: 3 }, // Tile 34

  { UP: 0, RIGHT: 5, DOWN: 8, LEFT: 0 }, // Tile 35
  { UP: 0, RIGHT: 0, DOWN: 6, LEFT: 5 }, // Tile 36
  { UP: 8, RIGHT: 7, DOWN: 0, LEFT: 0 }, // Tile 37
  { UP: 6, RIGHT: 0, DOWN: 0, LEFT: 7 }, // Tile 38

  { UP: 9, RIGHT: 0, DOWN: 9, LEFT: 0 }, // Tile 39

  { UP: 1, RIGHT: 4, DOWN: 1, LEFT: 4 }, // Tile 40
  { UP: 3, RIGHT: 1, DOWN: 3, LEFT: 1 }, // Tile 41
  { UP: 4, RIGHT: 1, DOWN: 4, LEFT: 1 }, // Tile 42
  { UP: 1, RIGHT: 3, DOWN: 1, LEFT: 3 }, // Tile 43

  { UP: 0, RIGHT: 0, DOWN: 9, LEFT: 0 }, // Tile 44
  { UP: 9, RIGHT: 0, DOWN: 0, LEFT: 0 }, // Tile 45

  { UP: 1, RIGHT: 4, DOWN: 0, LEFT: 0 }, // Tile 46
  { UP: 1, RIGHT: 0, DOWN: 4, LEFT: 0 }, // Tile 47
  { UP: 1, RIGHT: 0, DOWN: 3, LEFT: 0 }, // Tile 48
  { UP: 1, RIGHT: 0, DOWN: 0, LEFT: 3 }, // Tile 49
  { UP: 1, RIGHT: 0, DOWN: 0, LEFT: 4 }, // Tile 50
  { UP: 1, RIGHT: 3, DOWN: 0, LEFT: 0 }, // Tile 51

  { UP: 3, RIGHT: 1, DOWN: 0, LEFT: 0 }, // Tile 52
  { UP: 0, RIGHT: 1, DOWN: 4, LEFT: 0 }, // Tile 53
  { UP: 0, RIGHT: 1, DOWN: 3, LEFT: 0 }, // Tile 54
  { UP: 0, RIGHT: 1, DOWN: 0, LEFT: 3 }, // Tile 55
  { UP: 0, RIGHT: 1, DOWN: 0, LEFT: 4 }, // Tile 56
  { UP: 4, RIGHT: 1, DOWN: 0, LEFT: 0 }, // Tile 57

  { UP: 0, RIGHT: 4, DOWN: 1, LEFT: 0 }, // Tile 58
  { UP: 4, RIGHT: 0, DOWN: 1, LEFT: 0 }, // Tile 59
  { UP: 3, RIGHT: 0, DOWN: 1, LEFT: 0 }, // Tile 60
  { UP: 0, RIGHT: 0, DOWN: 1, LEFT: 3 }, // Tile 61
  { UP: 0, RIGHT: 0, DOWN: 1, LEFT: 4 }, // Tile 62
  { UP: 0, RIGHT: 3, DOWN: 1, LEFT: 0 }, // Tile 63

  { UP: 0, RIGHT: 4, DOWN: 0, LEFT: 1 }, // Tile 64
  { UP: 0, RIGHT: 0, DOWN: 4, LEFT: 1 }, // Tile 65
  { UP: 0, RIGHT: 0, DOWN: 3, LEFT: 1 }, // Tile 66
  { UP: 4, RIGHT: 0, DOWN: 0, LEFT: 1 }, // Tile 67
  { UP: 3, RIGHT: 0, DOWN: 0, LEFT: 1 }, // Tile 68
  { UP: 0, RIGHT: 3, DOWN: 0, LEFT: 1 }, // Tile 69

  { UP: 0, RIGHT: 4, DOWN: 3, LEFT: 0 }, // Tile 70
  { UP: 4, RIGHT: 4, DOWN: 0, LEFT: 0 }, // Tile 71
  { UP: 4, RIGHT: 0, DOWN: 0, LEFT: 3 }, // Tile 72
  { UP: 0, RIGHT: 0, DOWN: 3, LEFT: 3 }, // Tile 73
  { UP: 0, RIGHT: 0, DOWN: 4, LEFT: 4 }, // Tile 74
  { UP: 0, RIGHT: 3, DOWN: 4, LEFT: 0 }, // Tile 75
  { UP: 3, RIGHT: 3, DOWN: 0, LEFT: 0 }, // Tile 76
  { UP: 3, RIGHT: 0, DOWN: 0, LEFT: 4 }, // Tile 77

  { UP: 9, RIGHT: 1, DOWN: 9, LEFT: 1 }, // Tile 78
];
