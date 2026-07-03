(function () {
  "use strict";

  var EXPERIENCES = [
    {
      id: "e1",
      period: "Jul 2025 — Present",
      role: "Senior Software Engineer",
      org: "Dynamic Solution Innovators",
      project: "OpenCRVS — Release hotfixes & research",
      tasks: [
        "Author Storybook tests for new frontend changes",
        "Add Playwright e2e tests to ensure product stability",
        "Integrate release features and bug fixes",
        "Develop release automation workflows",
        "Orchestrate delivery tasks with AI agents",
        "Migrate event-refactor changes to MOSIP",
        "Migrate yarn → pnpm (POC)",
        "Fix Metabase dashboard bugs",
        "Issue and maintain semantic releases",
      ],
      tags: ["React", "TypeScript", "Tanstack Query", "Zustand", "tRPC", "Storybook", "Playwright", "PostgreSQL", "pnpm"],
    },
    {
      id: "e2",
      period: "Apr 2024 — Jul 2025",
      role: "Senior Software Engineer",
      org: "Dynamic Solution Innovators",
      project: "OpenCRVS — MOSIP integration",
      tasks: [
        "Designed and built the ID-verification frontend — pre-filling forms from a QR reader, verifying the data against backend services, and updating the client with the result",
        "Technically designed the E-Signet authentication branch: redirect-based sign-in with automatic form pre-filling",
        "Developed ID-verifier APIs in the OpenCRVS middleware",
        "Shipped and maintained the MOSIP integration release",
      ],
      tags: ["Fastify", "MOSIP", "Turborepo", "PostgreSQL", "SQLite", "TypeScript"],
    },
    {
      id: "x1",
      period: "Jan 2025 — Mar 2025 · Part-time",
      role: "Technical Consultant",
      org: "Linkboss.io",
      project: "React codebase refactor & high-performance graph",
      tasks: [
        "Hired to refactor the React codebase for maintainability and performance",
        "Built a physics-enabled graph visualization that renders 20,000 nodes at high performance",
      ],
      tags: ["React", "TypeScript", "Performance"],
    },
    {
      id: "e3",
      period: "Oct 2023 — Apr 2024",
      role: "Senior Software Engineer",
      org: "Dynamic Solution Innovators",
      project: "OpenCRVS — Madagascar migration",
      tasks: [
        "Led the local developer team",
        "Configured country-specific requirements in the country-config repository",
        "Wrote database migration scripts that processed over 115,900 population records",
      ],
      tags: ["MongoDB", "Node.js", "FHIR", "GraphQL", "Docker", "Jenkins", "GitLab"],
    },
    {
      id: "e4",
      period: "Sep 2023 — Oct 2023",
      role: "Software Engineer",
      org: "Dynamic Solution Innovators",
      project: "OpenCRVS — Philippines POC",
      tasks: [
        "Stood up a working OpenCRVS proof-of-concept under a strict two-week deadline",
        "Provisioned and configured the environment with Ansible and GitHub Actions",
      ],
      tags: [
        "Ansible",
        "GitHub Actions",
        "React",
        "GraphQL",
        "Node.js",
        "InfluxDB",
        "MongoDB",
        "Redux",
        "HapiJS",
        "Redis",
        "Elasticsearch",
        "Docker",
        "Storybook",
        "Next.js",
        "NestJS",
      ],
    },
    {
      id: "e5",
      period: "May 2023 — Sep 2023",
      role: "Software Engineer",
      org: "Dynamic Solution Innovators",
      project: "OpenCRVS — Cameroon pilot",
      tasks: [
        "Tailored the OpenCRVS configuration to the civil-registration requirements for Cameroon",
        "Mentored 2 local developers and rolled the deployment out across 2 communes",
      ],
      tags: ["React", "GraphQL", "Node.js"],
    },
    {
      id: "e6",
      period: "Oct 2022 — May 2023",
      role: "Software Engineer",
      org: "Dynamic Solution Innovators",
      project: "OpenCRVS — Nigeria pilot",
      tasks: [
        "Adapted OpenCRVS to the registration workflows and reference data for Nigeria",
        "Paired directly with a local Nigerian engineer to hand off ownership of ongoing maintenance",
      ],
      tags: ["React", "GraphQL", "Node.js"],
    },
    {
      id: "e7",
      period: "Nov 2021 — Oct 2022",
      role: "Software Engineer",
      org: "Dynamic Solution Innovators",
      project: "OpenCRVS — Core",
      tasks: [
        "Implemented location-hierarchy-based user counts across backend and frontend",
        "Built a bulk email capability in the notification service — reaching all users regardless of role or location, dispatched in batches of 500",
        "Led technical design for core backend features",
      ],
      tags: ["Node.js", "GraphQL", "MongoDB", "HapiJS"],
    },
    {
      id: "e8",
      period: "Jan 2021 — Nov 2021",
      role: "Associate Software Engineer",
      org: "Dynamic Solution Innovators",
      project: "LAMT Suite refactor",
      tasks: [
        "Led Next.js frontend architecture & development",
        "Migrated legacy Nuxt logic with pixel-perfect fidelity",
        "Optimized MongoDB queries for 10k+ records",
        "Implemented backend APIs with NestJS",
      ],
      tags: ["Next.js", "Nuxt", "MongoDB", "NestJS", "TypeScript"],
    },
    {
      id: "e9",
      period: "Aug 2018 — Dec 2020",
      role: "Asst. Software Engineer",
      org: "Dynamic Solution Innovators",
      project: "OpenCRVS — Core & Bangladesh pilot",
      tasks: [
        "Delivered frontend and backend features across the core platform",
        "Supported the Bangladesh pilot, live in a sub-district with ~1,500 records",
      ],
      tags: ["React", "Node.js", "GraphQL", "MongoDB", "Redux"],
    },
    {
      id: "p1",
      period: "Aug 2019 — Nov 2019",
      role: "Software Developer (Part-time)",
      org: "CloudCampus24",
      project: "CloudCampus24 Android app",
      tasks: ["Build the CloudCampus24 Android mobile application"],
      tags: ["React Native", "Android"],
    },
    {
      id: "p2",
      period: "Aug 2017 — Aug 2018",
      role: "Mobile Engineer",
      org: "Harriken.com",
      project: "Harriken iOS app",
      tasks: ["Built the Harriken iOS app and managed App Store releases plus TestFlight distribution to the internal team"],
      tags: ["React Native", "iOS"],
    },
    {
      id: "p3",
      period: "Jun 2016 — Aug 2017",
      role: "Android Engineer",
      org: "Chalo.com",
      project: "Chalo, Chalo Partner & cAgent apps",
      tasks: [
        "Built the Chalo, Chalo Partner and cAgent Android apps — the rider app reached ~200K Play Store downloads, the driver app ~5K",
      ],
      tags: ["Android"],
    },
    {
      id: "p4",
      period: "Apr 2016 — May 2016",
      role: "Android Engineer",
      org: "Orange Toolz",
      project: "Portfolio Android apps",
      tasks: ["Build various Android applications for the company portfolio"],
      tags: ["Android"],
    },
  ];

  var PILL_PRIORITY = [
    "React",
    "Next.js",
    "TypeScript",
    "Performance",
    "Redux",
    "Zustand",
    "Tanstack Query",
    "tRPC",
    "Storybook",
    "Playwright",
    "React Native",
    "GraphQL",
    "Node.js",
    "NestJS",
    "Fastify",
    "HapiJS",
    "MongoDB",
    "PostgreSQL",
    "SQLite",
    "Elasticsearch",
    "Redis",
    "InfluxDB",
    "Docker",
    "GitHub Actions",
    "Jenkins",
    "GitLab",
    "Ansible",
    "Turborepo",
    "pnpm",
    "FHIR",
    "MOSIP",
    "Nuxt",
    "Android",
    "iOS",
  ];

  function buildPillList(exps) {
    var set = {};
    exps.forEach(function (e) {
      e.tags.forEach(function (t) {
        set[t] = true;
      });
    });
    var ordered = PILL_PRIORITY.filter(function (p) {
      return set[p];
    });
    var leftovers = Object.keys(set).filter(function (t) {
      return PILL_PRIORITY.indexOf(t) === -1;
    });
    return ordered.concat(leftovers);
  }

  var pillList = buildPillList(EXPERIENCES);
  var selectedTag = null;
  var popoverOpen = false;

  var pillRow = document.getElementById("pillRow");
  var timeline = document.getElementById("timeline");
  var clearChip = document.getElementById("clearChip");
  var avatarBtn = document.getElementById("avatarBtn");
  var emailPopover = document.getElementById("emailPopover");

  function metaFor(exp) {
    return exp.org === "Dynamic Solution Innovators" ? exp.role : exp.role + " · " + exp.org;
  }

  function renderPills() {
    pillRow.innerHTML = "";
    pillList.forEach(function (name) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pill" + (selectedTag === name ? " active" : "");
      btn.textContent = name;
      btn.dataset.name = name;
      btn.addEventListener("click", function () {
        selectedTag = selectedTag === name ? null : name;
        render();
      });
      pillRow.appendChild(btn);
    });
  }

  function renderClearChip(filtered) {
    if (!selectedTag) {
      clearChip.hidden = true;
      clearChip.textContent = "";
      clearChip.onclick = null;
      return;
    }
    clearChip.hidden = false;
    clearChip.textContent = 'Showing "' + selectedTag + '" · ' + filtered.length + " roles · clear ✕";
    clearChip.onclick = function () {
      selectedTag = null;
      render();
    };
  }

  function buildCard(exp) {
    var card = document.createElement("div");
    card.className = "exp-card";
    card.dataset.flipKey = exp.id;

    var row1 = document.createElement("div");
    row1.className = "exp-row1";

    var project = document.createElement("div");
    project.className = "exp-project";
    project.textContent = exp.project;

    var period = document.createElement("div");
    period.className = "exp-period";
    period.textContent = exp.period;

    row1.appendChild(project);
    row1.appendChild(period);
    card.appendChild(row1);

    var meta = document.createElement("div");
    meta.className = "exp-meta";
    meta.textContent = metaFor(exp);
    card.appendChild(meta);

    var tasks = document.createElement("ul");
    tasks.className = "exp-tasks";
    exp.tasks.forEach(function (task) {
      var li = document.createElement("li");
      li.textContent = task;
      tasks.appendChild(li);
    });
    card.appendChild(tasks);

    var tags = document.createElement("div");
    tags.className = "exp-tags";
    exp.tags.forEach(function (tagName) {
      var span = document.createElement("span");
      span.className = "exp-tag" + (tagName === selectedTag ? " hot" : "");
      span.textContent = tagName;
      tags.appendChild(span);
    });
    card.appendChild(tags);

    return card;
  }

  function renderTimeline() {
    var filtered = selectedTag
      ? EXPERIENCES.filter(function (e) {
          return e.tags.indexOf(selectedTag) !== -1;
        })
      : EXPERIENCES;

    // FLIP: capture rects of currently rendered cards, keyed by id.
    var before = {};
    timeline.querySelectorAll("[data-flip-key]").forEach(function (el) {
      before[el.dataset.flipKey] = el.getBoundingClientRect();
    });

    timeline.innerHTML = "";
    filtered.forEach(function (exp) {
      timeline.appendChild(buildCard(exp));
    });

    // FLIP: animate cards that persisted; fade-in cards that are new.
    timeline.querySelectorAll("[data-flip-key]").forEach(function (el) {
      var prev = before[el.dataset.flipKey];
      if (prev) {
        var next = el.getBoundingClientRect();
        var dx = prev.left - next.left;
        var dy = prev.top - next.top;
        if (dx || dy) {
          el.animate([{ transform: "translate(" + dx + "px," + dy + "px)" }, { transform: "none" }], {
            duration: 440,
            easing: "cubic-bezier(0.22,1,0.36,1)",
          });
        }
      } else {
        el.animate(
          [
            { opacity: 0, transform: "translateY(12px) scale(0.98)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 360, easing: "cubic-bezier(0.22,1,0.36,1)" }
        );
      }
    });

    // Subtle pulse on the tenure/date text of every card matching the active skill.
    if (selectedTag) {
      timeline.querySelectorAll(".exp-period").forEach(function (el) {
        el.classList.remove("pulse");
        void el.offsetWidth; // restart animation
        el.classList.add("pulse");
      });
    }

    return filtered;
  }

  function render() {
    renderPills();
    var filtered = renderTimeline();
    renderClearChip(filtered);
  }

  function setPopoverOpen(open) {
    popoverOpen = open;
    emailPopover.hidden = !open;
    avatarBtn.setAttribute("aria-expanded", String(open));
  }

  avatarBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    setPopoverOpen(!popoverOpen);
  });

  document.addEventListener("click", function (e) {
    if (popoverOpen && !emailPopover.contains(e.target) && !avatarBtn.contains(e.target)) {
      setPopoverOpen(false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && popoverOpen) {
      setPopoverOpen(false);
    }
  });

  render();
})();
