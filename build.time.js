
const BuildTimingPlugin = function() {};

BuildTimingPlugin.prototype.apply = function(compiler) {
	compiler.plugin('compilation', (compilation) => {
		let startOptimizePhase;

		compilation.plugin('optimize-chunk-assets', (chunks, callback) => {
			startOptimizePhase = Date.now();
			callback();
		});

		compilation.plugin('after-optimize-chunk-assets', () => {
			const optimizePhaseDuration = Date.now() - startOptimizePhase;
			console.log(`==========> Duration For Optimization: ${optimizePhaseDuration}`);
		});
	});
};

module.exports = BuildTimingPlugin;