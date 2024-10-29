import esbuild from "esbuild";

esbuild
	.build({
		entryPoints: ["./_site/service-worker.js"],
		outfile: "./_site/service-worker.js",
		allowOverwrite: true,
		define: {
			"process.env.NODE_ENV": '"production"',
		},
		platform: "browser",
		target: "es6",
		bundle: true,
		minify: true,
		sourcemap: true,
	})
	.catch((err) => {
		if (err) throw err;
	});
