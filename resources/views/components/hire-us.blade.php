<section id="hire-us" class="py-20 md:py-28 relative bg-[#12173B]/40 border-b border-gray-200 dark:border-[#2E3A82]/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 mb-12">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#12173B] border border-gray-300 dark:border-[#2E3A82] text-xs font-mono text-[#1C2459] dark:text-[#F5FF67]">
                <span class="w-2 h-2 rounded-full bg-[#F5FF67]"></span>
                <span>START A PROJECT</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C2459] dark:text-white">
                Start Your Project With DevTZ
            </h2>
            <p class="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Let's work together to bring your software vision to life. Fill out the form below and our engineering team will get back to you soon.
            </p>
        </div>

        <!-- Form Card -->
        <div class="rounded-2xl bg-white dark:bg-[#171E4A] border-2 border-gray-200 dark:border-[#2E3A82] p-8 sm:p-10 shadow-xl" x-data="{ submitted: false, loading: false }">
            
            <template x-if="submitted">
                <div class="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-center space-y-2">
                    <div class="text-2xl">✓</div>
                    <div class="font-bold text-base text-emerald-300">Request Submitted Successfully!</div>
                    <p class="text-xs text-gray-300">Our engineering team will review your project requirements and contact you within 24-48 hours.</p>
                </div>
            </template>

            <form x-show="!submitted" action="{{ route('contact.store') }}" method="POST" @submit.prevent="loading = true; setTimeout(() => { loading = false; submitted = true; }, 1000)" class="space-y-6">
                @csrf
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                            Your Name *
                        </label>
                        <input type="text" name="name" required placeholder="John Doe"
                               class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#12173B] border border-gray-300 dark:border-[#2E3A82] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#F5FF67] font-sans transition-all text-sm">
                    </div>

                    <div>
                        <label class="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                            Email Address *
                        </label>
                        <input type="email" name="email" required placeholder="your.email@example.com"
                               class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#12173B] border border-gray-300 dark:border-[#2E3A82] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#F5FF67] font-sans transition-all text-sm">
                    </div>
                </div>

                <div>
                    <label class="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                    </label>
                    <input type="tel" name="phone" required placeholder="+255 746 439 242"
                           class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#12173B] border border-gray-300 dark:border-[#2E3A82] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#F5FF67] font-sans transition-all text-sm">
                </div>

                <div>
                    <label class="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                        Project Name *
                    </label>
                    <input type="text" name="project_name" required placeholder="e.g., Enterprise CRM System, E-commerce Mobile App, Automation Pipeline"
                           class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#12173B] border border-gray-300 dark:border-[#2E3A82] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#F5FF67] font-sans transition-all text-sm">
                </div>

                <div>
                    <label class="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                        Sample Link (Optional)
                    </label>
                    <input type="url" name="sample_link" placeholder="https://example.com or link to a similar service/reference"
                           class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#12173B] border border-gray-300 dark:border-[#2E3A82] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#F5FF67] font-sans transition-all text-sm">
                    <p class="mt-1 text-[11px] text-gray-400">Share a link to a reference website or application that inspires your project</p>
                </div>

                <div>
                    <label class="block text-xs font-mono font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                        Project Description *
                    </label>
                    <textarea name="description" required rows="5" placeholder="Tell us about your project: key features, technical requirements, target timeline, budget range..."
                              class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#12173B] border border-gray-300 dark:border-[#2E3A82] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#F5FF67] font-sans transition-all text-sm resize-none"></textarea>
                </div>

                <!-- Info Banner -->
                <div class="p-4 rounded-xl bg-[#1C2459]/60 border border-[#2E3A82] text-xs font-mono text-gray-300 flex items-start gap-3">
                    <div class="text-[#F5FF67] font-bold shrink-0">ℹ</div>
                    <div>
                        <strong class="text-[#F5FF67]">What happens next?</strong> After you submit this form, our team will review your project requirements and contact you within 24-48 hours to discuss details and provide an architecture quote.
                    </div>
                </div>

                <!-- Submit Button -->
                <button type="submit"
                        :disabled="loading"
                        class="w-full py-4 px-6 rounded-xl font-mono text-xs font-bold uppercase tracking-wider text-[#1C2459] bg-[#F5FF67] hover:bg-[#E2EC48] shadow-[0_0_20px_rgba(245,255,103,0.3)] transition-all">
                    <span x-text="loading ? 'Submitting Request...' : 'Submit Project Request'"></span>
                </button>
            </form>
        </div>

    </div>
</section>

