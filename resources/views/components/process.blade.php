<section id="process" class="py-20 md:py-28 relative bg-[#12173B]/50 border-b border-gray-200 dark:border-[#2E3A82]/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <!-- Left: Why Choose DevTZ -->
            <div class="space-y-6">
                <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#12173B] border border-gray-300 dark:border-[#2E3A82] text-xs font-mono text-[#1C2459] dark:text-[#F5FF67]">
                    <span class="w-2 h-2 rounded-full bg-[#F5FF67]"></span>
                    <span>WHY CHOOSE DEVTZ</span>
                </div>
                
                <h2 class="text-3xl sm:text-4xl font-extrabold text-[#1C2459] dark:text-white">
                    Technical expertise meets business vision.
                </h2>
                
                <p class="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    We combine technical expertise with deep business understanding to deliver solutions that not only work flawlessly but also drive real business results and ROI.
                </p>

                <div class="space-y-4 pt-2">
                    @php
                        $reasons = [
                            ['title' => 'Expert Team', 'desc' => 'Skilled developers with enterprise engineering experience'],
                            ['title' => 'Agile Approach', 'desc' => 'Flexible development with transparent, regular sprint updates'],
                            ['title' => 'Quality Assurance', 'desc' => 'Rigorous automated testing and strict quality standards'],
                            ['title' => 'Ongoing Support', 'desc' => '24/7 technical support and long-term maintenance services'],
                        ];
                    @endphp
                    @foreach($reasons as $reason)
                        <div class="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#171E4A] border border-gray-200 dark:border-[#2E3A82] shadow-sm">
                            <div class="w-8 h-8 rounded-lg bg-[#F5FF67] text-[#1C2459] flex items-center justify-center font-bold shrink-0 mt-0.5">
                                ✓
                            </div>
                            <div>
                                <h3 class="text-base font-bold text-[#1C2459] dark:text-white">{{ $reason['title'] }}</h3>
                                <p class="text-xs text-gray-600 dark:text-gray-300 mt-0.5">{{ $reason['desc'] }}</p>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

            <!-- Right: Our Development Process -->
            <div class="rounded-2xl bg-white dark:bg-[#171E4A] border-2 border-gray-200 dark:border-[#2E3A82] p-8 shadow-xl">
                <div class="flex items-center justify-between pb-6 mb-6 border-b border-gray-200 dark:border-[#2E3A82]">
                    <h3 class="text-xl font-bold font-mono text-[#1C2459] dark:text-white">
                        Our Development Process
                    </h3>
                    <span class="text-xs font-mono text-[#1C2459] dark:text-[#F5FF67] bg-gray-100 dark:bg-[#12173B] px-2.5 py-1 rounded border border-gray-300 dark:border-[#2E3A82]">6 STAGES</span>
                </div>

                <div class="space-y-3">
                    @php
                        $steps = [
                            ['step' => '01', 'title' => 'Discovery', 'desc' => 'Deep dive into understanding your business requirements & goals'],
                            ['step' => '02', 'title' => 'Planning', 'desc' => 'System architecture blueprinting and roadmap design'],
                            ['step' => '03', 'title' => 'Development', 'desc' => 'Agile sprint implementation with clean code practices'],
                            ['step' => '04', 'title' => 'Testing', 'desc' => 'Quality assurance, security audits, and load testing'],
                            ['step' => '05', 'title' => 'Deployment', 'desc' => 'Seamless production launch and cloud go-live'],
                            ['step' => '06', 'title' => 'Support', 'desc' => 'Ongoing 24/7 maintenance, updates, and monitoring'],
                        ];
                    @endphp
                    @foreach($steps as $step)
                        <div class="flex items-center gap-4 p-3.5 rounded-xl bg-gray-50 dark:bg-[#12173B] border border-gray-200 dark:border-[#2E3A82]/80 hover:border-[#F5FF67] transition-all">
                            <div class="w-10 h-10 rounded-lg bg-[#1C2459] dark:bg-[#1C2459] text-[#F5FF67] font-mono font-bold text-sm flex items-center justify-center shrink-0 border border-[#2E3A82]">
                                {{ $step['step'] }}
                            </div>
                            <div>
                                <h4 class="text-sm font-bold text-[#1C2459] dark:text-white">{{ $step['title'] }}</h4>
                                <p class="text-xs text-gray-500 dark:text-gray-400">{{ $step['desc'] }}</p>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>

        </div>

    </div>
</section>

