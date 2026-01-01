import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [

    {
      category: "Languages",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      ]
    },
    {
      category: "ML/DL Frameworks",
      skills: [
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "Jupyter Notebook", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" },
      ]
    },
    {
      category: "Data Analysis & Processing",
      skills: [
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
        { name: "Seaborn", logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
        { name: "Plotly", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/plotly/plotly-original.svg" },
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Expertise across the full Stack Data Professional stack
        </p>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-muted-foreground uppercase tracking-wide">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative px-6 py-4 bg-blue-50 border border-blue-200 rounded-lg hover:border-blue-300 hover:bg-blue-100 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-7 h-7 object-contain"
                      />
                      <span className="text-base font-medium text-blue-900">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;