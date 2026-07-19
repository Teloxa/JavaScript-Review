<template>
  <main class="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl items-center px-4 py-16 sm:px-6">
    <section class="w-full overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-2xl backdrop-blur-md sm:p-10">
      <div class="mb-4 inline-flex rounded-full bg-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
        LeetCode
      </div>
      <h1 class="max-w-2xl text-4xl font-black text-slate-950 sm:text-5xl">View for future LeetCode challenges</h1>
      <p class="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg"> This space is reserved for future implementations of LeetCode
      </p>

      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 class="text-lg font-bold text-slate-950">Estado</h2>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">Page prepared for future implementations of problems, solutions and filters.</p>
        </div>
        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 class="text-lg font-bold text-slate-950">Navegación</h2>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">The Navbar already links here via Vue Router to keep the structure ready.</p>
        </div>
      </div>
    </section>
  </main>
</template>