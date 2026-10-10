<div class="relative w-full {{ $aspect ?? 'h-48' }}" x-data="{ currentSlide: 0, total: {{ count($images) }} }">
    @foreach($images as $idx => $img)
        <img src="{{ $img }}" 
             alt="{{ $title }} - Slide {{ $idx + 1 }}" 
             x-show="currentSlide === {{ $idx }}"
             x-transition:enter="transition ease-out duration-300"
             x-transition:enter-start="opacity-0"
             x-transition:enter-end="opacity-100"
             class="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity">
    @endforeach

    @if(count($images) > 1)
        <!-- Controls -->
        <button type="button" @click.stop="currentSlide = (currentSlide - 1 + total) % total"
                class="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/60 text-white hover:bg-black/80 text-xs font-bold transition-all z-10">
            ❮
        </button>
        <button type="button" @click.stop="currentSlide = (currentSlide + 1) % total"
                class="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/60 text-white hover:bg-black/80 text-xs font-bold transition-all z-10">
            ❯
        </button>
        <!-- Pagination dots -->
        <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            <template x-for="i in total" :key="i">
                <span @click.stop="currentSlide = i - 1"
                      :class="currentSlide === (i - 1) ? 'bg-[#F5FF67] w-3' : 'bg-white/60 w-1.5'"
                      class="h-1.5 rounded-full transition-all cursor-pointer"></span>
            </template>
        </div>
    @endif
</div>

