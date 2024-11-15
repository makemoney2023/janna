"use client";

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Play, Zap, ChevronLeft, ChevronRight, Download } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const quotes = [
  {
    quote: "How long, how many months or years is it before we can change that button to say push to production?"
  },
  {
    quote: "All you should be doing is talking to the users... and then press the right button."
  },
  {
    quote: "What would it take to actually allow that to happen for somebody to hook this up and have it just literally write your production code from you saying, I've got an idea and you take it from the equivalent of a post it note to a production code."
  }
]

const pressReleaseContent = `Introduction to a New Era in Product Management

In an enlightening dialogue between a product manager and CEO, industry leaders explore how artificial intelligence (AI) is reshaping the landscape of product management. This conversation highlights innovative workflows that integrate AI tools, aiming to enhance productivity and streamline transitions from ideas into actionable business value.

Evolutionary Insights on ProdPad

The discussion kicked off with reflections from the CEO on their journey developing ProdPad—a comprehensive software tool designed for effective product management. "Our evolution was not merely about technology; it was about understanding user needs at every step," said the CEO, emphasizing how feedback has been instrumental throughout its development phases.

Leveraging AI for Enhanced Productivity

The featured guest presented groundbreaking concepts aimed at integrating generative AI within everyday processes. They introduced Rivet—an application facilitating graph-building capabilities tailored specifically for creating efficient AI-driven workflows. "With Rivet, we can transform meeting notes into high-quality content quickly," explained the product manager during their presentation.

This collaborative approach underscores an emerging trend where technical skills are increasingly vital for modern-day product managers as they navigate through complex digital ecosystems influenced by advanced technologies like generative AI.

Historical Context and Future Implications

As part of this rich exchange, both participants discussed historical shifts within project management roles alongside technological advancements that have democratized access to essential resources previously reserved only for tech specialists. "Today's PMs can focus more on engaging users rather than getting bogged down by technical tasks," noted the CEO while addressing these transformative changes over time.

Looking ahead towards future landscapes shaped by automation and enhanced customer interactions via voice conversations powered by sophisticated analytics tools—the duo emphasized redefined skill sets necessary to thrive amidst evolving expectations in this field driven largely by innovation opportunities afforded through harnessing powerful new technologies effectively.

Conclusion & Call-To-Action

Concluding their insightful session filled with mutual appreciation regarding shared insights around leveraging cutting-edge solutions such as those proposed—it became evident there exists immense potential awaiting exploration further across industries eager embracing change brought forth via integration efforts involving Artificial Intelligence systems today!

For journalists interested in learning more or accessing additional materials related directly stemming out discussions held here please contact: press@candidconversations.com`

export default function LandingPage() {
  const [currentQuote, setCurrentQuote] = useState(0)

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  useEffect(() => {
    const timer = setInterval(nextQuote, 10000) // Change quote every 10 seconds
    return () => clearInterval(timer)
  }, [])

  const downloadPressRelease = () => {
    const element = document.createElement("a");
    const file = new Blob([pressReleaseContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "CandidConversations_PressRelease.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  const downloadGuide = () => {
    const element = document.createElement("a");
    element.href = "/Implementation Steps - Prodpad push to prod.pdf";
    element.download = "Implementation Steps - Prodpad push to prod.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Candid Conversations</h1>
          <div className="space-x-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Episodes</Button>
            <Button variant="ghost">Blog</Button>
            <Button>Subscribe</Button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-24">
        {/* Hero Section with SVG Background */}
        <section className="relative py-20">
          <div
            className="absolute inset-0 bg-cover bg-right"
            style={{
              backgroundImage: "url('/diagram_light.svg')",
              backgroundSize: '100%',
              backgroundPosition: 'right 10% center',
              filter: 'blur(3.92px) brightness(0.9)', // Further reduced blur by 30%
              zIndex: 0,
            }}
          ></div>
          <div className="relative z-10 text-center space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight">Candid Conversations with CEOs about AI</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exploring how AI is revolutionizing product development and business strategies
            </p>
            <Button size="lg" className="mt-4">
              Watch Latest Episode <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* Featured Episode */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <Badge>Latest Episode</Badge>
              <h2 className="text-3xl font-bold mt-2">From Concept to Production at Light Speed</h2>
            </div>
          </div>
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="flex justify-center items-center">
                <video controls className="w-full rounded-lg">
                  <source src="/janna.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="space-y-6 overflow-y-auto max-h-96 p-4">
                <h3 className="text-lg font-semibold mb-2">Attendees</h3>
                <ul className="list-disc list-inside">
                  <li>Participant 1: Christopher Buzny</li>
                  <li>Participant 2: Janna Bastow (from ProdPad)</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Date and Time</h3>
                <p>Tuesday, November 12, 2024</p>
                <h3 className="text-lg font-semibold mb-2">Introduction</h3>
                <p>The meeting was an informal conversation between two professionals discussing their experiences with AI in product management. The atmosphere was friendly, highlighting shared backgrounds and interests.</p>
                <h4 className="text-md font-semibold mt-2 mb-1">Locations</h4>
                <ul className="list-disc list-inside">
                  <li>Participant 1 is located in Cambridge, Ontario.</li>
                  <li>Chris is based in the UK.</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Key Discussion Points</h3>
                <h4 className="text-md font-semibold mt-2 mb-1">Personal Backgrounds</h4>
                <p>Both participants shared their Canadian roots and discussed their current locations.</p>
                <h4 className="text-md font-semibold mt-2 mb-1">Job Market Context</h4>
                <p>Participant 1 mentioned being laid off for a year and a half but utilizing that time to develop skills related to AI tools relevant for product managers.</p>
                <h4 className="text-md font-semibold mt-2 mb-1">Proposition on Technical Skills in Product Management</h4>
                <p>Participant 1 proposed the need for technical skills among product managers due to advancements in AI tools. They expressed confidence that these tools could significantly streamline workflow processes from inception to business value.</p>
                <h5 className="text-sm font-semibold mt-2 mb-1">Highlights:</h5>
                <ul className="list-disc list-inside">
                  <li>Importance of technical knowledge for high-quality output using AI.</li>
                  <li>Mentioned Sam Altman's perspective on AGI (Artificial General Intelligence) within two years, emphasizing urgency for skill adaptation.</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Current Tools & Workflows Demonstrated by Participant 1</h3>
                <h4 className="text-md font-semibold mt-2 mb-1">Rivet Tool Overview</h4>
                <p>Chris also introduced Rivet as a graph builder designed to enhance LLM applications without extensive coding knowledge. They highlighted its low-code capabilities:</p>
                <h5 className="text-sm font-semibold mt-2 mb-1">Features Discussed:</h5>
                <ol className="list-decimal list-inside">
                  <li>Audio Transcription - Converting recorded conversations into written text.</li>
                  <li>Content Generation - Creating blog outlines, press releases, etc., from transcribed data.</li>
                  <li>PowerPoint Generation - Automatically generating presentations based on conversations or topics discussed during meetings.</li>
                  <li>Prompt Optimizers - Enhancing input prompts to improve output quality from LLMs like GPT models.</li>
                </ol>
                <h5 className="text-sm font-semibold mt-2 mb-1">Example Use Cases:</h5>
                <ul className="list-disc list-inside">
                  <li>Feeding conversation transcripts into different agents within Rivet's workflow.</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">Future Vision & Impact of AI on Product Management</h3>
                <p>Chris elaborated on how he envisions future roles of product managers evolving with the integration of sophisticated AI technologies:</p>
                <h4 className="text-md font-semibold mt-2 mb-1">Predictions:</h4>
                <ul className="list-disc list-inside">
                  <li>Voice-enabled project building where ideas can be translated directly into functional products through intuitive interfaces—potentially revolutionizing traditional workflows.</li>
                </ul>
                <h5 className="text-sm font-semibold mt-2 mb-1">Opportunities Highlighted:</h5>
                <ol className="list-decimal list-inside">
                  <li>Enhanced collaboration with users due to reduced administrative burdens allowing more focus on customer interaction.</li>
                  <li>The role will shift towards orchestrating various technological components rather than merely managing projects traditionally.</li>
                </ol>
                <h3 className="text-lg font-semibold mb-2">Issues Raised During Discussion</h3>
                <h4 className="text-md font-semibold mt-2 mb-1">Integration Challenges</h4>
                <p>Participants acknowledged existing challenges regarding siloed toolsets making it difficult for PMs to integrate information seamlessly across platforms like Zoom, ChatGPT, etc., leading to inefficiencies in leveraging generated insights effectively.</p>
                <h3 className="text-lg font-semibold mb-2">Action Items</h3>
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b">Action Item</th>
                      <th className="py-2 px-4 border-b">Responsible Party</th>
                      <th className="py-2 px-4 border-b">Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">Share recording of this meeting</td>
                      <td className="py-2 px-4 border-b">Janna</td>
                      <td className="py-2 px-4 border-b">After</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Send links/resources about Rivet tool</td>
                      <td className="py-2 px-4 border-b">Chris</td>
                      <td className="py-2 px-4 border-b">After</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">Explore potential use cases further using demonstrated workflows</td>
                      <td className="py-2 px-4 border-b">Both parties</td>
                      <td className="py-2 px-4 border-b">Ongoing</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm italic">This summary captures key highlights from the discussion while addressing issues raised concerning technology's impact on product management.</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Push to Production */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Push a Button to Production</h2>
          <div className="relative h-48 flex items-center justify-center">
            <button 
              onClick={prevQuote} 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="w-full max-w-2xl mx-auto px-12">
              <p className="text-lg italic text-gray-700 transition-opacity duration-500 ease-in-out">
                "{quotes[currentQuote].quote}"
              </p>
            </div>
            <button 
              onClick={nextQuote} 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              aria-label="Next quote"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <p className="text-sm font-semibold">- Janna Bastow, ProdPad CEO</p>
          <Button size="lg" className="animate-pulse">
            <Zap className="mr-2" /> Push to Production
          </Button>
        </section>

        {/* AI Capabilities Dashboard */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Pushing to Production - Inception to Business Value</h2>
          <Tabs defaultValue="voice" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="voice">Voice Interaction</TabsTrigger>
              <TabsTrigger value="data">Data Analysis</TabsTrigger>
              <TabsTrigger value="okr">OKRs</TabsTrigger>
              <TabsTrigger value="dev">Dev Prompts</TabsTrigger>
            </TabsList>
            <TabsContent value="voice" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Voice Interaction</CardTitle>
                  <CardDescription>Manage and analyze voice call transcripts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">The VoiceCallService is a core component of our system, handling the management and analysis of voice call transcripts.</p>
                  <div className="mt-6 space-y-4">
                    <h4 className="text-lg font-semibold">VoiceCallService</h4>
                    <p className="text-sm text-muted-foreground">
                      The VoiceCallService manages the process of analyzing call transcripts and updating call statuses.
                    </p>
                    <div className="bg-muted p-4 rounded-md">
                      <h5 className="font-semibold mb-2">Key Functionalities:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Transcript Handling: Manages the process of analyzing call transcripts by interfacing with the AnalysisService.</li>
                        <li>Status Management: Updates the status of calls (e.g., from pending analysis to analyzed) in the database.</li>
                        <li>User Tracking: Associates analyses with specific users to maintain accountability and track performance.</li>
                        <li>Error Handling: Logs and manages errors encountered during the transcript analysis process, ensuring system reliability.</li>
                      </ul>
                    </div>
                    <h5 className="font-semibold mb-2">Interactions:</h5>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Directly communicates with the AnalysisService to initiate and manage transcript analyses.</li>
                      <li>Utilizes the EmailService to trigger email notifications post-analysis.</li>
                      <li>Updates call statuses in the Supabase database based on analysis outcomes.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="data" className="mt-4">
              <Card>
  <CardHeader>
    <CardTitle>Data Analysis</CardTitle>
    <CardDescription>Analyze call transcripts and generate insights</CardDescription>
  </CardHeader>
  <CardContent>
    <h3 className="text-lg font-semibold mb-4">AnalysisService</h3>
    <div className="space-y-4">
      <div>
        <h4 className="text-md font-semibold mb-2">Functionality:</h4>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li><span className="font-semibold">Transcript Analysis:</span> Utilizes OpenAI's GPT-4 model to analyze call transcripts, extracting meaningful insights such as sentiment scores, key discussion points, customer satisfaction levels, and action items.</li>
          <li><span className="font-semibold">Data Validation:</span> Ensures the integrity of the analysis results by validating responses using Zod schemas.</li>
          <li><span className="font-semibold">Data Persistence:</span> Saves the analyzed data into the call_analyses table within the Supabase database.</li>
          <li><span className="font-semibold">Recommendation Generation:</span> Collaborates with the RecommendationService to generate actionable follow-up recommendations based on the analysis.</li>
          <li><span className="font-semibold">Error Handling:</span> Implements robust error handling mechanisms, including retries and custom error types, to manage and log potential issues during the analysis process.</li>
        </ul>
      </div>
      <div>
        <h4 className="text-md font-semibold mb-2">Interactions:</h4>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Communicates with the RecommendationService to generate follow-up actions.</li>
          <li>Interfaces with the EmailService to send analysis summaries to customers.</li>
          <li>Interacts with the Supabase database for data storage and retrieval.</li>
        </ul>
      </div>
    </div>
  </CardContent>
</Card>
            </TabsContent>
            <TabsContent value="okr" className="mt-4">
              <Card>
  <CardHeader>
    <CardTitle>RecommendationService</CardTitle>
    <CardDescription>Generate and manage follow-up recommendations based on lead information and call analysis</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="mb-4">The RecommendationService is a crucial component of our AI-driven system, providing intelligent follow-up suggestions and prioritization.</p>
    <div className="mt-6 space-y-4">
      <h4 className="text-lg font-semibold">Functionality:</h4>
      <div className="bg-muted p-4 rounded-md">
        <ul className="list-disc list-inside space-y-2">
          <li>Recommendation Generation: Creates follow-up recommendations based on lead information and call analysis results.</li>
          <li>Schema Validation: Ensures that generated recommendations adhere to predefined schemas for consistency and reliability.</li>
          <li>Utility Functions: Provides helper methods to calculate priority, confidence levels, potential value, and next steps for follow-ups.</li>
        </ul>
      </div>
      <h4 className="text-lg font-semibold">Interactions:</h4>
      <p className="text-sm text-muted-foreground">
        The RecommendationService interacts with other components of the system:
      </p>
      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
        <li>Receives input from the AnalysisService to formulate recommendations.</li>
        <li>Utilized by the FollowUpEffectivenessService to assess the effectiveness of follow-up actions.</li>
      </ul>
    </div>
  </CardContent>
</Card>
            </TabsContent>
            <TabsContent value="dev" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Dev Prompts</CardTitle>
                  <CardDescription>Generate comprehensive system architecture and implementation plans</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Leverage AI to create detailed, production-ready application designs for complex systems like an advanced Voice AI Call Data Management System.</p>
                  <div className="bg-muted p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Sample Metaprompt:</h4>
                    <p className="text-sm">
                      {`const COMPREHENSIVE_SYSTEM_PRD_PROMPT = \`You are a senior software engineer and technical architect specializing in AI-powered applications. Your mission is to create a comprehensive production ready application for an advanced Voice AI Call Data Management System with enhanced LLM capabilities...\``}
                    </p>
                  </div>
                  <p className="mt-4">This metaprompt covers business context, existing architecture, technical implementation, enhanced capabilities, integration framework, value-based roadmap, implementation requirements, business value metrics, security & compliance, and system flow.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Call to Action for Guide Download */}
        <section className="space-y-8 flex flex-col md:flex-row md:w-3/4 mx-auto h-64">
          <div className="md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/interactions.svg')" }}></div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold">Download Our Guide</h2>
            <p className="text-lg text-gray-600 mt-4">
              To implement a feature in ProdPad that allows users to push an idea straight to production via an autonomous agent, the product and development team would need to follow a structured approach. Learn how by downloading our guide.
            </p>
            <Button
              size="lg"
              onClick={downloadGuide}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" /> Download Guide
            </Button>
          </div>
        </section>

        {/* Blog Articles */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Latest Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Voice Agents - Revolutionizing how we interact with Technology",
                summary: "Discover how AI voice agents are transforming interactions and providing strategic advantages in business operations.",
                link: "/aiTechnology.pdf"
              },
              {
                title: "Autonomous AI, a CEO's New Best Friend",
                summary: "Explore how autonomous AI is becoming an indispensable ally for CEOs, driving efficiency and innovation.",
                link: "/csuiteAgent.pdf"
              },
              {
                title: "Unlock the Power of AI Voice Agents: A Business Game-Changer",
                summary: "Learn how businesses are integrating AI into their strategies to gain a competitive edge in the market...",
                link: "/unlock.pdf"
              }
            ].map((article, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>By AI Research Team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">{article.summary}</p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost">Read More</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                      <DialogHeader>
                        <DialogTitle>{article.title}</DialogTitle>
                      </DialogHeader>
                      <iframe
                        src={article.link}
                        className="w-full h-96"
                        title={article.title}
                      ></iframe>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Press Release */}
        <section className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Press Release</h2>
          <h3 className="text-xl font-semibold mb-2">Candid Conversations Launches Groundbreaking AI Series</h3>
          <p className="text-gray-600 mb-4">
            Candid Conversations announces a new video series featuring in-depth discussions with industry leaders about the transformative power of AI in business and product development.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Read Full Press Release</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Press Release</DialogTitle>
                <DialogDescription>
                  Candid Conversations Launches Groundbreaking AI Series
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[60vh] overflow-y-auto">
                <h3 className="text-lg font-semibold mb-2">Introduction to a New Era in Product Management</h3>
                <p className="mb-4">
                  In an enlightening dialogue between a product manager and CEO, industry leaders explore how artificial intelligence (AI) is reshaping the landscape of product management. This conversation highlights innovative workflows that integrate AI tools, aiming to enhance productivity and streamline transitions from ideas into actionable business value.
                </p>
                <h4 className="text-md font-semibold mb-2">Evolutionary Insights on ProdPad</h4>
                <p className="mb-4">
                  The discussion kicked off with reflections from the CEO on their journey developing ProdPad—a comprehensive software tool designed for effective product management. "Our evolution was not merely about technology; it was about understanding user needs at every step," said the CEO, emphasizing how feedback has been instrumental throughout its development phases.
                </p>
                <h4 className="text-md font-semibold mb-2">Leveraging AI for Enhanced Productivity</h4>
                <p className="mb-4">
                  The featured guest presented groundbreaking concepts aimed at integrating generative AI within everyday processes. They introduced Rivet—an application facilitating graph-building capabilities tailored specifically for creating efficient AI-driven workflows. "With Rivet, we can transform meeting notes into high-quality content quickly," explained the product manager during their presentation.
                </p>
                <p className="mb-4">
                  This collaborative approach underscores an emerging trend where technical skills are increasingly vital for modern-day product managers as they navigate through complex digital ecosystems influenced by advanced technologies like generative AI.
                </p>
                <h4 className="text-md font-semibold mb-2">Historical Context and Future Implications</h4>
                <p className="mb-4">
                  As part of this rich exchange, both participants discussed historical shifts within project management roles alongside technological advancements that have democratized access to essential resources previously reserved only for tech specialists. "Today's PMs can focus more on engaging users rather than getting bogged down by technical tasks," noted the CEO while addressing these transformative changes over time.
                </p>
                <p className="mb-4">
                  Looking ahead towards future landscapes shaped by automation and enhanced customer interactions via voice conversations powered by sophisticated analytics tools—the duo emphasized redefined skill sets necessary to thrive amidst evolving expectations in this field driven largely by innovation opportunities afforded through harnessing powerful new technologies effectively.
                </p>
                <h4 className="text-md font-semibold mb-2">Conclusion & Call-To-Action</h4>
                <p className="mb-4">
                  Concluding their insightful session filled with mutual appreciation regarding shared insights around leveraging cutting-edge solutions such as those proposed—it became evident there exists immense potential awaiting exploration further across industries eager embracing change brought forth via integration efforts involving Artificial Intelligence systems today!
                </p>
                <p>
                  For journalists interested in learning more or accessing additional materials related directly stemming out discussions held here please contact: press@candidconversations.com
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <Button onClick={downloadPressRelease}>
                  <Download className="mr-2 h-4 w-4" /> Download Press Release
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">Candid Conversations brings you insightful discussions with industry leaders about the future of AI and product development.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Episodes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest episodes and insights.</p>
              <Button>Subscribe Now</Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Candid Conversations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}