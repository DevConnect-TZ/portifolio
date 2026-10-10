<section id="activities" class="py-20 md:py-28 relative border-b border-gray-200 dark:border-[#2E3A82]/50" x-data="{ filter: 'all' }">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#12173B] border border-gray-300 dark:border-[#2E3A82] text-xs font-mono text-[#1C2459] dark:text-[#F5FF67]">
                <span class="w-2 h-2 rounded-full bg-[#F5FF67]"></span>
                <span>COMMUNITY & WORKSHOPS</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C2459] dark:text-white">
                Our Activities & Developer Events
            </h2>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Discover our bootcamps, workshops, open-source initiatives, and mentorship programs empowering the tech ecosystem in Tanzania and beyond.
            </p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-12">
            @php
                $activityTypes = [
                    'all' => 'All Activities',
                    'bootcamps' => 'Bootcamps',
                    'workshops' => 'Coding Workshops',
                    'mentorship' => 'Mentorship',
                    'opensource' => 'Open-Source',
                    'hackathons' => 'Hackathons',
                ];
            @endphp
            @foreach($activityTypes as $key => $label)
                <button type="button"
                        @click="filter = '{{ $key }}'"
                        :class="filter === '{{ $key }}' ? 'bg-[#F5FF67] text-[#1C2459] font-bold border-[#F5FF67]' : 'bg-white dark:bg-[#12173B] text-gray-700 dark:text-gray-300 border-gray-300 dark:border-[#2E3A82] hover:border-[#F5FF67]'"
                        class="px-4 py-2 rounded-xl text-xs font-mono border transition-all duration-200">
                    {{ $label }}
                </button>
            @endforeach
        </div>

        <!-- Activities Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @php
                $activitiesList = [
                    [
                        'id' => 1,
                        'type' => 'bootcamps',
                        'type_label' => 'Bootcamps',
                        'title' => 'DevTZ Enterprise Software Engineering Bootcamp',
                        'description' => 'Intensive 8-week hands-on training covering modern backend architecture, cloud infrastructure, and real-world system design.',
                        'date' => '2026-08-15',
                        'image' => 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
                    ],
                    [
                        'id' => 2,
                        'type' => 'workshops',
                        'type_label' => 'Coding Workshops',
                        'title' => 'Building High-Concurrency Laravel Octane & Redis APIs',
                        'description' => 'A practical workshop on architecting sub-30ms APIs, Redis queue clusters, and asynchronous database connections.',
                        'date' => '2026-07-20',
                        'image' => 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
                    ],
                    [
                        'id' => 3,
                        'type' => 'opensource',
                        'type_label' => 'Open-source Projects',
                        'title' => 'Swahili NLP & Tanzanian Fintech SDK Hack-Day',
                        'description' => 'Collaborative open-source sprint building localized payment integration SDKs and Swahili AI language models.',
                        'date' => '2026-06-10',
                        'image' => 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
                    ],
                    [
                        'id' => 4,
                        'type' => 'mentorship',
                        'type_label' => 'Mentorship Programs',
                        'title' => 'Junior Engineering & Career Growth Mentorship',
                        'description' => 'One-on-one code reviews, architecture guidance, and career pairing for emerging software engineers.',
                        'date' => '2026-05-01',
                        'image' => 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
                    ],
                    [
                        'id' => 5,
                        'type' => 'hackathons',
                        'type_label' => 'Hackathons',
                        'title' => 'Dar es Salaam Smart City Innovation Hackathon',
                        'description' => '48-hour competitive hackathon focused on IoT telematics, traffic optimization, and digital health solutions.',
                        'date' => '2026-04-12',
                        'image' => 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
                    ],
                    [
                        'id' => 6,
                        'type' => 'workshops',
                        'type_label' => 'Coding Workshops',
                        'title' => 'Flutter & Cross-Platform Mobile Architecture',
                        'description' => 'Deep dive into local SQLite caching, WebRTC video streaming, and state management in production Flutter apps.',
                        'date' => '2026-03-18',
                        'image' => 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
                    ],
                ];
            @endphp

            @foreach($activitiesList as $act)
                <div x-show="filter === 'all' || filter === '{{ $act['type'] }}'"
                     x-transition:enter="transition ease-out duration-200"
                     x-transition:enter-start="opacity-0 scale-95"
                     x-transition:enter-end="opacity-100 scale-100"
                     class="group rounded-2xl bg-white dark:bg-[#171E4A] border border-gray-200 dark:border-[#2E3A82] overflow-hidden shadow-lg hover:border-[#F5FF67] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                    
                    <div>
                        <!-- Image Container -->
                        <div class="relative h-48 overflow-hidden bg-[#12173B]">
                            <img src="{{ $act['image'] }}" alt="{{ $act['title'] }}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90">
                            <div class="absolute top-3 left-3">
                                <span class="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1C2459]/90 text-[#F5FF67] border border-[#2E3A82] backdrop-blur-sm">
                                    {{ $act['type_label'] }}
                                </span>
                            </div>
                        </div>

                        <!-- Card Content -->
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-[#1C2459] dark:text-white mb-2 group-hover:text-[#1C2459] dark:group-hover:text-[#F5FF67] transition-colors leading-snug">
                                {{ $act['title'] }}
                            </h3>
                            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                {{ $act['description'] }}
                            </p>
                        </div>
                    </div>

                    <div class="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-[#2E3A82]/50 flex items-center justify-between text-xs font-mono text-gray-500 dark:text-gray-400">
                        <span class="flex items-center gap-1.5">
                            <svg class="w-4 h-4 text-[#F5FF67]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                            {{ date('M d, Y', strtotime($act['date'])) }}
                        </span>
                        <span class="text-[#1C2459] dark:text-[#F5FF67] font-bold">DevTZ Community</span>
                    </div>

                </div>
            @endforeach
        </div>

    </div>
</section>

