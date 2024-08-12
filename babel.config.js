
process.env.EXPO_ROUTER_APP_ROOT = '../../App/index';
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      "nativewind/babel"],
  };
};
