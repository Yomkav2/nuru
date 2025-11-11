/**
 * posts.js
 *
 * Очень простой формат.
 * Каждый пост — объект в массиве posts.
 * Поля:
 *  - title         (строка)   — заголовок поста
 *  - description   (строка)   — короткое описание
 *  - scriptContent (строка)   — код скрипта. Используйте шаблонные строки (backticks) чтобы сохранить переносы.
 *  - tags          (массив)   — необязательно, для фильтрации (пример: ['speed','teleport'])
 *
 * Пример:
 * {
 *   title: "Скрипт Speed",
 *   description: "Увеличивает скорость игрока",
 *   scriptContent: `
 * -- Lua код здесь
 * local player = game.Players.LocalPlayer
 * if player and player.Character and player.Character:FindFirstChild('Humanoid') then
 *   player.Character.Humanoid.WalkSpeed = 80
 * end
 * `,
 *   tags: ['speed']
 * }
 *
 * Важно: ставьте запятую между объектами в массиве.
 */

const posts = [

  {
    title: "Chilli Hub",
    description: "STEAL A BRAINROT SCRIPT",
    scriptContent: `
loadstring( game:HttpGet ("https://raw.githubusercontent.com/tienkhanh1/spicy/main/Chilli.lua"))()
  `,
    tags: []
  },

  {
    title: "BLUE X HUB",
    description: "PLANT VS BRAINROTS SCRIPT",
    scriptContent: `
loadstring(game:HttpGet("https://raw.githubusercontent.com/Dev-BlueX/BlueX-Hub/refs/heads/main/Main.lua"))()
  `,
    tags: []
  },

    {
    title: "TOASTY HUB",
    description: "PLANT VS BRAINROTS SCRIPT",
    scriptContent: `
loadstring(game:HttpGet("https://raw.githubusercontent.com/nouralddin-abdullah/ToastyHub-XD/refs/heads/main/hub-main.lua"))()
  `,
    tags: []
  },
  
]; // конец массива posts


