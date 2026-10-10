<section id="team" class="py-20 md:py-28 relative border-b border-gray-200 dark:border-[#2E3A82]/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#12173B] border border-gray-300 dark:border-[#2E3A82] text-xs font-mono text-[#1C2459] dark:text-[#F5FF67]">
                <span class="w-2 h-2 rounded-full bg-[#F5FF67]"></span>
                <span>ENGINEERING TEAM</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C2459] dark:text-white">
                Meet the Team Behind DevTZ
            </h2>
            <p class="text-base text-gray-600 dark:text-gray-300">
                Skilled software engineers, system architects, and digital consultants dedicated to delivering excellence across every project.
            </p>
        </div>

        <!-- Team Members Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @php
                $teamMembers = isset($members) && count($members) > 0 ? $members : [
                    [
                        'id' => 1,
                        'name' => 'DevTZ Engineering Lead',
                        'role' => 'Founder & Principal Architect',
                        'bio' => 'Specializing in enterprise Laravel systems, high-concurrency microservices, and cloud infrastructure for scaling products.',
                        'photo' => null,
                        'portfolio' => 'https://devtz.site',
                        'social' => [
                            'github' => 'https://github.com/DevTZ',
                            'linkedin' => 'https://linkedin.com/company/devtz'
                        ]
                    ],
                    [
                        'id' => 2,
                        'name' => 'Senior Full-Stack Engineer',
                        'role' => 'Lead Web Architect',
                        'bio' => 'Passionate about building responsive, high-performance web applications with React, Vue, and modern cloud APIs.',
                        'photo' => null,
                        'portfolio' => 'https://devtz.site',
                        'social' => [
                            'github' => 'https://github.com/DevTZ',
                            'linkedin' => 'https://linkedin.com/company/devtz'
                        ]
                    ],
                    [
                        'id' => 3,
                        'name' => 'Mobile & Systems Engineer',
                        'role' => 'Flutter & iOS/Android Specialist',
                        'bio' => 'Crafting fluid cross-platform mobile apps with local SQLite synchronization, biometric security, and clean UI/UX.',
                        'photo' => null,
                        'portfolio' => 'https://devtz.site',
                        'social' => [
                            'github' => 'https://github.com/DevTZ',
                            'linkedin' => 'https://linkedin.com/company/devtz'
                        ]
                    ],
                ];
            @endphp

            @foreach($teamMembers as $member)
                <div class="group rounded-2xl bg-white dark:bg-[#171E4A] border border-gray-200 dark:border-[#2E3A82] overflow-hidden shadow-lg hover:border-[#F5FF67] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between">
                    
                    <div>
                        <!-- Avatar / Photo Header -->
                        <div class="relative h-60 bg-gradient-to-br from-[#1C2459] to-[#12173B] flex items-center justify-center p-6 border-b border-[#2E3A82]">
                            @if(!empty($member['photo']))
                                <div class="w-36 h-36 rounded-full overflow-hidden border-4 border-[#F5FF67] shadow-xl">
                                    <img src="{{ $member['photo'] }}" alt="{{ $member['name'] }}" class="w-full h-full object-cover">
                                </div>
                            @else
                                <div class="w-36 h-36 rounded-full bg-[#12173B] border-4 border-[#F5FF67] flex items-center justify-center shadow-xl text-[#F5FF67] font-bold text-5xl font-mono">
                                    {{ strtoupper(substr($member['name'], 0, 1)) }}
                                </div>
                            @endif
                        </div>

                        <!-- Info Content -->
                        <div class="p-6 text-center">
                            <h3 class="text-xl font-bold text-[#1C2459] dark:text-white mb-1">
                                {{ $member['name'] }}
                            </h3>
                            <p class="text-xs font-mono font-semibold text-[#1C2459] dark:text-[#F5FF67] mb-3 uppercase tracking-wider">
                                {{ $member['role'] }}
                            </p>
                            <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                {{ $member['bio'] }}
                            </p>
                        </div>
                    </div>

                    <!-- Footer Links & Social Icons -->
                    <div class="px-6 pb-6 pt-3 border-t border-gray-100 dark:border-[#2E3A82]/50 flex items-center justify-center gap-3">
                        @if(!empty($member['portfolio']))
                            <a href="{{ $member['portfolio'] }}" target="_blank" rel="noopener noreferrer"
                               class="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-[#12173B] text-xs font-mono font-bold text-[#1C2459] dark:text-[#F5FF67] border border-gray-300 dark:border-[#2E3A82] hover:border-[#F5FF67] transition-all">
                                <svg class="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                                Portfolio
                            </a>
                        @endif

                        @if(!empty($member['social']['github']))
                            <a href="{{ $member['social']['github'] }}" target="_blank" rel="noopener noreferrer" title="GitHub"
                               class="p-2 rounded-lg bg-gray-100 dark:bg-[#12173B] text-gray-700 dark:text-gray-300 hover:text-[#F5FF67] border border-gray-300 dark:border-[#2E3A82] hover:border-[#F5FF67] transition-all">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            </a>
                        @endif

                        @if(!empty($member['social']['linkedin']))
                            <a href="{{ $member['social']['linkedin'] }}" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                               class="p-2 rounded-lg bg-gray-100 dark:bg-[#12173B] text-gray-700 dark:text-gray-300 hover:text-[#F5FF67] border border-gray-300 dark:border-[#2E3A82] hover:border-[#F5FF67] transition-all">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        @endif
                    </div>

                </div>
            @endforeach
        </div>

    </div>
</section>

