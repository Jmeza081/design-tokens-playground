const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');


// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({
  name: 'gradient/unify',
  type: 'value',
  matcher: function(token) {
      console.log(token.attributes);
      // this is an example of a possible filter (based on the "cti" values) to show how a "matcher" works
      return token.attributes.subitem === 'gradient';
  },
  transformer: function(token) {
      return "Test";
    //   return `${token.value.from} + ${token.value.to}`;
  }
});


// REGISTER THE CUSTOM TRANFORM GROUPS

// if you want to see what a pre-defined group contains, uncomment the next line:
// console.log(StyleDictionary.transformGroup['group_name']);

StyleDictionary.registerTransformGroup({
  name: 'scss',
  // this is to show one possibility for adding a few transforms to a pre-defined group
  // (however, we suggest to use the previous approach, which is more explicit and clear)
  transforms: StyleDictionary.transformGroup['scss'].concat(['gradient/unify'])
});


// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.json');


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');