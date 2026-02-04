const defaultConfig = {
  theme: "light",
  language: "ko",
  debug: false
};

const userConfig = {
  theme: "dark",
  debug: true
};

// defaultConfig를 기준으로
// userConfig를 덮어쓴 finalConfig를 만드세요

const finalConfig={
    ...userConfig,
    ...defaultConfig
}

console.log(finalConfig)