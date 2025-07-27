declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"ar/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "ar/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "ar/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "ar/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "ar/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "ar/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "ar/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "ar/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "ar/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "ar/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "ar/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "ar/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "ar/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/harnessing-the-power-of-tiktok.md": {
	id: "ar/harnessing-the-power-of-tiktok.md";
  slug: "ar/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "ar/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "ar/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "ar/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "ar/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/how-to-save-tiktok-videos-without-watermark.md": {
	id: "ar/how-to-save-tiktok-videos-without-watermark.md";
  slug: "ar/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "ar/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "ar/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "ar/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "ar/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "ar/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "ar/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/introduction-to-astro-a-new-front-end-framework.md": {
	id: "ar/introduction-to-astro-a-new-front-end-framework.md";
  slug: "ar/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/kk222-game-download-apk-real-money-app.md": {
	id: "ar/kk222-game-download-apk-real-money-app.md";
  slug: "ar/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "ar/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "ar/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "ar/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "ar/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "ar/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "ar/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "ar/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "ar/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "ar/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "ar/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/the-power-and-potential-of-chatgpt.md": {
	id: "ar/the-power-and-potential-of-chatgpt.md";
  slug: "ar/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/the-power-of-typography-in-the-digital-era.md": {
	id: "ar/the-power-of-typography-in-the-digital-era.md";
  slug: "ar/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/unleashing-the-power-of-tailwind-css.md": {
	id: "ar/unleashing-the-power-of-tailwind-css.md";
  slug: "ar/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "ar/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "ar/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "ar/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "ar/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "ar/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "ar/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ar/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "ar/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "ar/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "de/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "de/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "de/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "de/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "de/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "de/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "de/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "de/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "de/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "de/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "de/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "de/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/harnessing-the-power-of-tiktok.md": {
	id: "de/harnessing-the-power-of-tiktok.md";
  slug: "de/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "de/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "de/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "de/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "de/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/how-to-save-tiktok-videos-without-watermark.md": {
	id: "de/how-to-save-tiktok-videos-without-watermark.md";
  slug: "de/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "de/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "de/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "de/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "de/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "de/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "de/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/introduction-to-astro-a-new-front-end-framework.md": {
	id: "de/introduction-to-astro-a-new-front-end-framework.md";
  slug: "de/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/kk222-game-download-apk-real-money-app.md": {
	id: "de/kk222-game-download-apk-real-money-app.md";
  slug: "de/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "de/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "de/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "de/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "de/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "de/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "de/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "de/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "de/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "de/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "de/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/the-power-and-potential-of-chatgpt.md": {
	id: "de/the-power-and-potential-of-chatgpt.md";
  slug: "de/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/the-power-of-typography-in-the-digital-era.md": {
	id: "de/the-power-of-typography-in-the-digital-era.md";
  slug: "de/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/unleashing-the-power-of-tailwind-css.md": {
	id: "de/unleashing-the-power-of-tailwind-css.md";
  slug: "de/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "de/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "de/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "de/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "de/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "de/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "de/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"de/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "de/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "de/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "en/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "en/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "en/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "en/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "en/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "en/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "en/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "en/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "en/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "en/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "en/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "en/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/harnessing-the-power-of-tiktok.md": {
	id: "en/harnessing-the-power-of-tiktok.md";
  slug: "en/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "en/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "en/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "en/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "en/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-save-tiktok-videos-without-watermark.md": {
	id: "en/how-to-save-tiktok-videos-without-watermark.md";
  slug: "en/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "en/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "en/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "en/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "en/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "en/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "en/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/introduction-to-astro-a-new-front-end-framework.md": {
	id: "en/introduction-to-astro-a-new-front-end-framework.md";
  slug: "en/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/kk222-game-download-apk-real-money-app.md": {
	id: "en/kk222-game-download-apk-real-money-app.md";
  slug: "en/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "en/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "en/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "en/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "en/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "en/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "en/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "en/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "en/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "en/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "en/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/the-power-and-potential-of-chatgpt.md": {
	id: "en/the-power-and-potential-of-chatgpt.md";
  slug: "en/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/the-power-of-typography-in-the-digital-era.md": {
	id: "en/the-power-of-typography-in-the-digital-era.md";
  slug: "en/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/unleashing-the-power-of-tailwind-css.md": {
	id: "en/unleashing-the-power-of-tailwind-css.md";
  slug: "en/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "en/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "en/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "en/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "en/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "en/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "en/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"en/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "en/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "en/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "es/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "es/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "es/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "es/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "es/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "es/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "es/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "es/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "es/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "es/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "es/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "es/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/harnessing-the-power-of-tiktok.md": {
	id: "es/harnessing-the-power-of-tiktok.md";
  slug: "es/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "es/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "es/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "es/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "es/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/how-to-save-tiktok-videos-without-watermark.md": {
	id: "es/how-to-save-tiktok-videos-without-watermark.md";
  slug: "es/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "es/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "es/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "es/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "es/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "es/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "es/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/introduction-to-astro-a-new-front-end-framework.md": {
	id: "es/introduction-to-astro-a-new-front-end-framework.md";
  slug: "es/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/kk222-game-download-apk-real-money-app.md": {
	id: "es/kk222-game-download-apk-real-money-app.md";
  slug: "es/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "es/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "es/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "es/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "es/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "es/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "es/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "es/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "es/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "es/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "es/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/the-power-and-potential-of-chatgpt.md": {
	id: "es/the-power-and-potential-of-chatgpt.md";
  slug: "es/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/the-power-of-typography-in-the-digital-era.md": {
	id: "es/the-power-of-typography-in-the-digital-era.md";
  slug: "es/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/unleashing-the-power-of-tailwind-css.md": {
	id: "es/unleashing-the-power-of-tailwind-css.md";
  slug: "es/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "es/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "es/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "es/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "es/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "es/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "es/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"es/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "es/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "es/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "fr/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "fr/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "fr/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "fr/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "fr/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "fr/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "fr/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "fr/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "fr/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "fr/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "fr/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "fr/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/harnessing-the-power-of-tiktok.md": {
	id: "fr/harnessing-the-power-of-tiktok.md";
  slug: "fr/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "fr/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "fr/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "fr/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "fr/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/how-to-save-tiktok-videos-without-watermark.md": {
	id: "fr/how-to-save-tiktok-videos-without-watermark.md";
  slug: "fr/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "fr/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "fr/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "fr/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "fr/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "fr/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "fr/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/introduction-to-astro-a-new-front-end-framework.md": {
	id: "fr/introduction-to-astro-a-new-front-end-framework.md";
  slug: "fr/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/kk222-game-download-apk-real-money-app.md": {
	id: "fr/kk222-game-download-apk-real-money-app.md";
  slug: "fr/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "fr/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "fr/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "fr/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "fr/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "fr/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "fr/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "fr/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "fr/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "fr/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "fr/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/the-power-and-potential-of-chatgpt.md": {
	id: "fr/the-power-and-potential-of-chatgpt.md";
  slug: "fr/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/the-power-of-typography-in-the-digital-era.md": {
	id: "fr/the-power-of-typography-in-the-digital-era.md";
  slug: "fr/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/unleashing-the-power-of-tailwind-css.md": {
	id: "fr/unleashing-the-power-of-tailwind-css.md";
  slug: "fr/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "fr/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "fr/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "fr/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "fr/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "fr/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "fr/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"fr/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "fr/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "fr/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "hi/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "hi/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "hi/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "hi/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "hi/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "hi/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "hi/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "hi/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "hi/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "hi/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "hi/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "hi/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/harnessing-the-power-of-tiktok.md": {
	id: "hi/harnessing-the-power-of-tiktok.md";
  slug: "hi/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "hi/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "hi/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "hi/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "hi/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/how-to-save-tiktok-videos-without-watermark.md": {
	id: "hi/how-to-save-tiktok-videos-without-watermark.md";
  slug: "hi/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "hi/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "hi/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "hi/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "hi/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "hi/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "hi/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/introduction-to-astro-a-new-front-end-framework.md": {
	id: "hi/introduction-to-astro-a-new-front-end-framework.md";
  slug: "hi/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/kk222-game-download-apk-real-money-app.md": {
	id: "hi/kk222-game-download-apk-real-money-app.md";
  slug: "hi/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "hi/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "hi/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "hi/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "hi/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "hi/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "hi/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "hi/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "hi/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "hi/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "hi/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/the-power-and-potential-of-chatgpt.md": {
	id: "hi/the-power-and-potential-of-chatgpt.md";
  slug: "hi/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/the-power-of-typography-in-the-digital-era.md": {
	id: "hi/the-power-of-typography-in-the-digital-era.md";
  slug: "hi/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/unleashing-the-power-of-tailwind-css.md": {
	id: "hi/unleashing-the-power-of-tailwind-css.md";
  slug: "hi/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "hi/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "hi/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "hi/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "hi/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "hi/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "hi/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"hi/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "hi/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "hi/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "id/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "id/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "id/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "id/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "id/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "id/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "id/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "id/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "id/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "id/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "id/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "id/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/harnessing-the-power-of-tiktok.md": {
	id: "id/harnessing-the-power-of-tiktok.md";
  slug: "id/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "id/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "id/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "id/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "id/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/how-to-save-tiktok-videos-without-watermark.md": {
	id: "id/how-to-save-tiktok-videos-without-watermark.md";
  slug: "id/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "id/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "id/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "id/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "id/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "id/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "id/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/introduction-to-astro-a-new-front-end-framework.md": {
	id: "id/introduction-to-astro-a-new-front-end-framework.md";
  slug: "id/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/kk222-game-download-apk-real-money-app.md": {
	id: "id/kk222-game-download-apk-real-money-app.md";
  slug: "id/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "id/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "id/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "id/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "id/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "id/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "id/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "id/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "id/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "id/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "id/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/the-power-and-potential-of-chatgpt.md": {
	id: "id/the-power-and-potential-of-chatgpt.md";
  slug: "id/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/the-power-of-typography-in-the-digital-era.md": {
	id: "id/the-power-of-typography-in-the-digital-era.md";
  slug: "id/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/unleashing-the-power-of-tailwind-css.md": {
	id: "id/unleashing-the-power-of-tailwind-css.md";
  slug: "id/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "id/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "id/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "id/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "id/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "id/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "id/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"id/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "id/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "id/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "it/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "it/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "it/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "it/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "it/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "it/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "it/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "it/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "it/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "it/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "it/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "it/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/harnessing-the-power-of-tiktok.md": {
	id: "it/harnessing-the-power-of-tiktok.md";
  slug: "it/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "it/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "it/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "it/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "it/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/how-to-save-tiktok-videos-without-watermark.md": {
	id: "it/how-to-save-tiktok-videos-without-watermark.md";
  slug: "it/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "it/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "it/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "it/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "it/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "it/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "it/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/introduction-to-astro-a-new-front-end-framework.md": {
	id: "it/introduction-to-astro-a-new-front-end-framework.md";
  slug: "it/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/kk222-game-download-apk-real-money-app.md": {
	id: "it/kk222-game-download-apk-real-money-app.md";
  slug: "it/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "it/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "it/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "it/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "it/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "it/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "it/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "it/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "it/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "it/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "it/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/the-power-and-potential-of-chatgpt.md": {
	id: "it/the-power-and-potential-of-chatgpt.md";
  slug: "it/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/the-power-of-typography-in-the-digital-era.md": {
	id: "it/the-power-of-typography-in-the-digital-era.md";
  slug: "it/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/unleashing-the-power-of-tailwind-css.md": {
	id: "it/unleashing-the-power-of-tailwind-css.md";
  slug: "it/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "it/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "it/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "it/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "it/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "it/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "it/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"it/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "it/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "it/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "ko/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "ko/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "ko/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "ko/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "ko/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "ko/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "ko/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "ko/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "ko/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "ko/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "ko/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "ko/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/harnessing-the-power-of-tiktok.md": {
	id: "ko/harnessing-the-power-of-tiktok.md";
  slug: "ko/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "ko/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "ko/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "ko/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "ko/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/how-to-save-tiktok-videos-without-watermark.md": {
	id: "ko/how-to-save-tiktok-videos-without-watermark.md";
  slug: "ko/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "ko/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "ko/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "ko/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "ko/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "ko/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "ko/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/introduction-to-astro-a-new-front-end-framework.md": {
	id: "ko/introduction-to-astro-a-new-front-end-framework.md";
  slug: "ko/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/kk222-game-download-apk-real-money-app.md": {
	id: "ko/kk222-game-download-apk-real-money-app.md";
  slug: "ko/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "ko/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "ko/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "ko/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "ko/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "ko/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "ko/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "ko/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "ko/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "ko/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "ko/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/the-power-and-potential-of-chatgpt.md": {
	id: "ko/the-power-and-potential-of-chatgpt.md";
  slug: "ko/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/the-power-of-typography-in-the-digital-era.md": {
	id: "ko/the-power-of-typography-in-the-digital-era.md";
  slug: "ko/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/unleashing-the-power-of-tailwind-css.md": {
	id: "ko/unleashing-the-power-of-tailwind-css.md";
  slug: "ko/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "ko/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "ko/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "ko/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "ko/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "ko/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "ko/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ko/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "ko/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "ko/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "ms/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "ms/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "ms/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "ms/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "ms/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "ms/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "ms/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "ms/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "ms/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "ms/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "ms/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "ms/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/harnessing-the-power-of-tiktok.md": {
	id: "ms/harnessing-the-power-of-tiktok.md";
  slug: "ms/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "ms/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "ms/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "ms/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "ms/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/how-to-save-tiktok-videos-without-watermark.md": {
	id: "ms/how-to-save-tiktok-videos-without-watermark.md";
  slug: "ms/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "ms/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "ms/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "ms/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "ms/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "ms/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "ms/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/introduction-to-astro-a-new-front-end-framework.md": {
	id: "ms/introduction-to-astro-a-new-front-end-framework.md";
  slug: "ms/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/kk222-game-download-apk-real-money-app.md": {
	id: "ms/kk222-game-download-apk-real-money-app.md";
  slug: "ms/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "ms/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "ms/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "ms/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "ms/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "ms/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "ms/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "ms/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "ms/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "ms/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "ms/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/the-power-and-potential-of-chatgpt.md": {
	id: "ms/the-power-and-potential-of-chatgpt.md";
  slug: "ms/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/the-power-of-typography-in-the-digital-era.md": {
	id: "ms/the-power-of-typography-in-the-digital-era.md";
  slug: "ms/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/unleashing-the-power-of-tailwind-css.md": {
	id: "ms/unleashing-the-power-of-tailwind-css.md";
  slug: "ms/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "ms/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "ms/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "ms/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "ms/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "ms/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "ms/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ms/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "ms/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "ms/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "nl/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "nl/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "nl/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "nl/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "nl/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "nl/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "nl/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "nl/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "nl/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "nl/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "nl/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "nl/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/harnessing-the-power-of-tiktok.md": {
	id: "nl/harnessing-the-power-of-tiktok.md";
  slug: "nl/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "nl/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "nl/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "nl/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "nl/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/how-to-save-tiktok-videos-without-watermark.md": {
	id: "nl/how-to-save-tiktok-videos-without-watermark.md";
  slug: "nl/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "nl/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "nl/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "nl/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "nl/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "nl/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "nl/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/introduction-to-astro-a-new-front-end-framework.md": {
	id: "nl/introduction-to-astro-a-new-front-end-framework.md";
  slug: "nl/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/kk222-game-download-apk-real-money-app.md": {
	id: "nl/kk222-game-download-apk-real-money-app.md";
  slug: "nl/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "nl/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "nl/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "nl/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "nl/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "nl/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "nl/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "nl/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "nl/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "nl/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "nl/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/the-power-and-potential-of-chatgpt.md": {
	id: "nl/the-power-and-potential-of-chatgpt.md";
  slug: "nl/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/the-power-of-typography-in-the-digital-era.md": {
	id: "nl/the-power-of-typography-in-the-digital-era.md";
  slug: "nl/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/unleashing-the-power-of-tailwind-css.md": {
	id: "nl/unleashing-the-power-of-tailwind-css.md";
  slug: "nl/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "nl/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "nl/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "nl/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "nl/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "nl/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "nl/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"nl/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "nl/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "nl/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "pt/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "pt/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "pt/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "pt/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "pt/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "pt/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "pt/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "pt/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "pt/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "pt/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "pt/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "pt/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/harnessing-the-power-of-tiktok.md": {
	id: "pt/harnessing-the-power-of-tiktok.md";
  slug: "pt/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "pt/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "pt/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "pt/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "pt/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/how-to-save-tiktok-videos-without-watermark.md": {
	id: "pt/how-to-save-tiktok-videos-without-watermark.md";
  slug: "pt/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "pt/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "pt/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "pt/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "pt/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "pt/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "pt/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/introduction-to-astro-a-new-front-end-framework.md": {
	id: "pt/introduction-to-astro-a-new-front-end-framework.md";
  slug: "pt/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/kk222-game-download-apk-real-money-app.md": {
	id: "pt/kk222-game-download-apk-real-money-app.md";
  slug: "pt/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "pt/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "pt/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "pt/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "pt/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "pt/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "pt/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "pt/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "pt/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "pt/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "pt/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/the-power-and-potential-of-chatgpt.md": {
	id: "pt/the-power-and-potential-of-chatgpt.md";
  slug: "pt/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/the-power-of-typography-in-the-digital-era.md": {
	id: "pt/the-power-of-typography-in-the-digital-era.md";
  slug: "pt/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/unleashing-the-power-of-tailwind-css.md": {
	id: "pt/unleashing-the-power-of-tailwind-css.md";
  slug: "pt/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "pt/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "pt/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "pt/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "pt/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "pt/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "pt/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"pt/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "pt/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "pt/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "ru/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "ru/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "ru/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "ru/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "ru/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "ru/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "ru/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "ru/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "ru/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "ru/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "ru/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "ru/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/harnessing-the-power-of-tiktok.md": {
	id: "ru/harnessing-the-power-of-tiktok.md";
  slug: "ru/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "ru/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "ru/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "ru/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "ru/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/how-to-save-tiktok-videos-without-watermark.md": {
	id: "ru/how-to-save-tiktok-videos-without-watermark.md";
  slug: "ru/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "ru/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "ru/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "ru/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "ru/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "ru/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "ru/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/introduction-to-astro-a-new-front-end-framework.md": {
	id: "ru/introduction-to-astro-a-new-front-end-framework.md";
  slug: "ru/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/kk222-game-download-apk-real-money-app.md": {
	id: "ru/kk222-game-download-apk-real-money-app.md";
  slug: "ru/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "ru/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "ru/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "ru/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "ru/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "ru/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "ru/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "ru/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "ru/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "ru/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "ru/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/the-power-and-potential-of-chatgpt.md": {
	id: "ru/the-power-and-potential-of-chatgpt.md";
  slug: "ru/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/the-power-of-typography-in-the-digital-era.md": {
	id: "ru/the-power-of-typography-in-the-digital-era.md";
  slug: "ru/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/unleashing-the-power-of-tailwind-css.md": {
	id: "ru/unleashing-the-power-of-tailwind-css.md";
  slug: "ru/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "ru/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "ru/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "ru/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "ru/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "ru/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "ru/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"ru/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "ru/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "ru/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "tl/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "tl/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "tl/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "tl/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "tl/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "tl/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "tl/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "tl/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "tl/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "tl/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "tl/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "tl/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/harnessing-the-power-of-tiktok.md": {
	id: "tl/harnessing-the-power-of-tiktok.md";
  slug: "tl/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "tl/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "tl/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "tl/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "tl/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/how-to-save-tiktok-videos-without-watermark.md": {
	id: "tl/how-to-save-tiktok-videos-without-watermark.md";
  slug: "tl/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "tl/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "tl/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "tl/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "tl/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "tl/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "tl/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/introduction-to-astro-a-new-front-end-framework.md": {
	id: "tl/introduction-to-astro-a-new-front-end-framework.md";
  slug: "tl/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/kk222-game-download-apk-real-money-app.md": {
	id: "tl/kk222-game-download-apk-real-money-app.md";
  slug: "tl/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "tl/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "tl/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "tl/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "tl/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "tl/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "tl/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "tl/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "tl/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "tl/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "tl/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/the-power-and-potential-of-chatgpt.md": {
	id: "tl/the-power-and-potential-of-chatgpt.md";
  slug: "tl/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/the-power-of-typography-in-the-digital-era.md": {
	id: "tl/the-power-of-typography-in-the-digital-era.md";
  slug: "tl/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/unleashing-the-power-of-tailwind-css.md": {
	id: "tl/unleashing-the-power-of-tailwind-css.md";
  slug: "tl/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "tl/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "tl/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "tl/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "tl/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "tl/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "tl/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tl/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "tl/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "tl/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/best-entertainment-apps-that-must-be-in-your-bookmark-list.md": {
	id: "tr/best-entertainment-apps-that-must-be-in-your-bookmark-list.md";
  slug: "tr/best-entertainment-apps-that-must-be-in-your-bookmark-list";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md": {
	id: "tr/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok.md";
  slug: "tr/best-online-earning-games-in-pakistan-that-are-trending-on-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md": {
	id: "tr/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth.md";
  slug: "tr/buy-a-tiktok-account-a-smart-shortcut-for-fast-growth";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md": {
	id: "tr/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025.md";
  slug: "tr/capcut-mod-apk-download-v13-7-0-premium-unlocked-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/comprehensive-anime-streaming-with-gogo-anime-for-android.md": {
	id: "tr/comprehensive-anime-streaming-with-gogo-anime-for-android.md";
  slug: "tr/comprehensive-anime-streaming-with-gogo-anime-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md": {
	id: "tr/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login.md";
  slug: "tr/download-slideshare-ppt-slides-slideshare-pdf-presentations-without-login";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/harnessing-the-power-of-tiktok.md": {
	id: "tr/harnessing-the-power-of-tiktok.md";
  slug: "tr/harnessing-the-power-of-tiktok";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md": {
	id: "tr/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader.md";
  slug: "tr/how-to-download-all-of-your-tiktok-videos-with-online-tiktok-downloader";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md": {
	id: "tr/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio.md";
  slug: "tr/how-to-download-tiktok-videos-on-iphone-android-and-pc-tiktokio";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/how-to-save-tiktok-videos-without-watermark.md": {
	id: "tr/how-to-save-tiktok-videos-without-watermark.md";
  slug: "tr/how-to-save-tiktok-videos-without-watermark";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/how-to-see-top-artists-on-spotify-music-app.md": {
	id: "tr/how-to-see-top-artists-on-spotify-music-app.md";
  slug: "tr/how-to-see-top-artists-on-spotify-music-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md": {
	id: "tr/iganony-instagram-anonymous-story-viewer-review-how-to-use-it.md";
  slug: "tr/iganony-instagram-anonymous-story-viewer-review-how-to-use-it";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/introducing-decap-cms-your-go-to-solution-for-content-management.md": {
	id: "tr/introducing-decap-cms-your-go-to-solution-for-content-management.md";
  slug: "tr/introducing-decap-cms-your-go-to-solution-for-content-management";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/introduction-to-astro-a-new-front-end-framework.md": {
	id: "tr/introduction-to-astro-a-new-front-end-framework.md";
  slug: "tr/introduction-to-astro-a-new-front-end-framework";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/kk222-game-download-apk-real-money-app.md": {
	id: "tr/kk222-game-download-apk-real-money-app.md";
  slug: "tr/kk222-game-download-apk-real-money-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md": {
	id: "tr/manok-na-pula-the-best-multiplayer-cockfighting-game-2025.md";
  slug: "tr/manok-na-pula-the-best-multiplayer-cockfighting-game-2025";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/royal-x-casino-apk-real-earning-app-download-for-android.md": {
	id: "tr/royal-x-casino-apk-real-earning-app-download-for-android.md";
  slug: "tr/royal-x-casino-apk-real-earning-app-download-for-android";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/royal-x-casino-download-official-app-v-2-30-6-latest-version.md": {
	id: "tr/royal-x-casino-download-official-app-v-2-30-6-latest-version.md";
  slug: "tr/royal-x-casino-download-official-app-v-2-30-6-latest-version";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/simplifying-front-end-interactivity-with-alpine-js.md": {
	id: "tr/simplifying-front-end-interactivity-with-alpine-js.md";
  slug: "tr/simplifying-front-end-interactivity-with-alpine-js";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md": {
	id: "tr/spike-mod-apk 2025-v5-9-205-unlocked-all characters-max-level.md";
  slug: "tr/spike-mod-apk-2025-v5-9-205-unlocked-all-characters-max-level";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/the-power-and-potential-of-chatgpt.md": {
	id: "tr/the-power-and-potential-of-chatgpt.md";
  slug: "tr/the-power-and-potential-of-chatgpt";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/the-power-of-typography-in-the-digital-era.md": {
	id: "tr/the-power-of-typography-in-the-digital-era.md";
  slug: "tr/the-power-of-typography-in-the-digital-era";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/unleashing-the-power-of-tailwind-css.md": {
	id: "tr/unleashing-the-power-of-tailwind-css.md";
  slug: "tr/unleashing-the-power-of-tailwind-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md": {
	id: "tr/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge.md";
  slug: "tr/using-tiktok-for-more-than-entertainment-how-digital-platforms-empower-users-with-legal-knowledge";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md": {
	id: "tr/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters.md";
  slug: "tr/what-is-jenny-mod-a-complete-guide-to-the-mod-and-its-characters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/what-is-minecraft-how-to-become-a-pro-player.md": {
	id: "tr/what-is-minecraft-how-to-become-a-pro-player.md";
  slug: "tr/what-is-minecraft-how-to-become-a-pro-player";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"tr/what-is-tiktok-18-tips-to-get-viral.md": {
	id: "tr/what-is-tiktok-18-tips-to-get-viral.md";
  slug: "tr/what-is-tiktok-18-tips-to-get-viral";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
