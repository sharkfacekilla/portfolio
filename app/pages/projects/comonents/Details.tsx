import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import {
  CheckCircle,
  Code2,
  Lightbulb,
  Play,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";
import YouTubeVideo from "./YouTubeVideo";
import { Project, ProjectProps } from "@/app/utils/app-types";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetails({ isVisible, project }: ProjectProps) {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <>
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <section className="px-6 lg:px-12 py-12 pb-60 ">
          <div className="max-w-7xl mx-auto">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-4 bg-white/5 border border-white/10">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black"
                >
                  <Target className="h-4 w-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Features
                </TabsTrigger>
                <TabsTrigger
                  value="technical"
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black"
                >
                  <Code2 className="h-4 w-4 mr-2" />
                  Technical
                </TabsTrigger>
                <TabsTrigger
                  value="learnings"
                  className="data-[state=active]:bg-cyan-500 data-[state=active]:text-black"
                >
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Learnings
                </TabsTrigger>
              </TabsList>

              <div className="mt-8">
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Target className="h-5 w-5 mr-2 text-cyan-400" />
                          Project Goals
                        </h3>
                        {project.goals &&
                        Array.isArray(project.goals) &&
                        project.goals.length > 0 ? (
                          <ul className="space-y-3 text-gray-300">
                            {project.goals.map((goal, index) => (
                              <li className="flex items-start" key={index}>
                                <CheckCircle className="h-4 w-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                                {goal}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-400 italic">
                            No specific goals were defined for this project.
                          </p>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Users className="h-5 w-5 mr-2 text-cyan-400" />
                          Target Audience
                        </h3>
                        <div className="space-y-4 text-gray-300">
                          {project.users &&
                          Array.isArray(project.users) &&
                          project.users.length > 0 ? (
                            project.users.map((item, index) => (
                              <div key={index}>
                                <h4 className="font-medium text-white mb-2">
                                  {item.name}
                                </h4>
                                <p>{item.description}</p>
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-400 italic">
                              No specific audience was defined for this project.
                            </p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <YouTubeVideo youtubeLink={project.youtubeLink} />
                </TabsContent>

                <TabsContent value="features" className="space-y-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.features &&
                    Array.isArray(project.features) &&
                    project.features.length > 0 ? (
                      project.features.map((feature, index) => (
                        <Card
                          key={feature.name}
                          className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 text-cyan-400" />
                              </div>
                              <h3 className="font-semibold">{feature.name}</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                              {feature.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <p className="text-gray-400 italic">
                        No specific features were defined for this project.
                      </p>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="technical" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Code2 className="h-5 w-5 mr-2 text-cyan-400" />
                          Architecture
                        </h3>
                        <div className="space-y-4 text-gray-300">
                          {project.tech &&
                          Array.isArray(project.tech) &&
                          project.tech.length > 0 ? (
                            <div className="mb-8">
                              {" "}
                              {project.tech.map((category, categoryIndex) => (
                                <div
                                  key={category.name || categoryIndex}
                                  className="mb-6 last:mb-0"
                                >
                                  {" "}
                                  {category.name && (
                                    <h4 className="text-xl font-semibold text-white mb-3">
                                      {category.name}{" "}
                                    </h4>
                                  )}
                                  {category.technology &&
                                  Array.isArray(category.technology) &&
                                  category.technology.length > 0 ? (
                                    <ul className="list-disc list-inside space-y-1">
                                      {category.technology.map(
                                        (tech: string, techIndex) => (
                                          <li key={tech} className="text-white">
                                            {tech}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <span className="text-gray-400 italic">
                              No technologies listed.
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">
                          Key Challenges
                        </h3>
                        {project.challenges &&
                        Array.isArray(project.challenges) &&
                        project.challenges.length > 0 ? (
                          <ul className="space-y-3 text-gray-300">
                            {project.challenges.map((challenge, index) => (
                              <li key={index} className="flex items-start">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-400 italic">
                            No specific challenges were defined for this
                            project.
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="learnings" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {project.learnings &&
                    Array.isArray(project.learnings) &&
                    project.learnings.length > 0 ? (
                      project.learnings.map((learning, index) => (
                        <Card
                          key={index}
                          className="bg-white/5 border-white/10"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                <Lightbulb className="h-4 w-4 text-cyan-400" />
                              </div>
                              <div>
                                <h3 className="font-semibold mb-2">
                                  {learning}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                  How this learning experience contributed to my
                                  growth as a developer.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <p className="text-gray-400 italic col-span-full">
                        No specific learnings were defined for this project.
                      </p>
                    )}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
      </div>
    </>
  );
}
