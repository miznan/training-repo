"use client";

import { useState, type FormEvent } from "react";
import { STATUSES, UNITS, type Project } from "@/lib/types";
import { validateProject } from "@/lib/validate";

export default function ProjectsView({ initialProjects }: { initialProjects: Project[] }) {
  // TODO 1: keep only valid projects (use validateProject) in state
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  // Form fields (all text from the inputs; convert budget yourself)
  const [title, setTitle] = useState("");
  const [unit, setUnit] = useState<string>(UNITS[0]);
  const [status, setStatus] = useState<string>(STATUSES[0]);
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault(); // stops the browser from reloading the page
    // TODO 2: build a Project from the form fields (budget must become a number,
    //         empty budget must NOT become 0, so it fails validation)
    // TODO 3: validate it. If errors: setErrors(...) and stop.
    // TODO 4: if valid: give the next id (P051, P052, ...), add it to the TOP of the list,
    //         clear the form and clear errors.
  }

  return (
    <section>
      <h2>Add project</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* TODO 5: add Unit (select), Status (select), Budget (number) and Start date (date) fields */}
        <span />
        <button type="submit">Add</button>
      </form>

      {/* TODO 6: show errors in red (className="errors") */}

      <p>Showing {projects.length} projects</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            {/* TODO 7: Title, Unit, Status, Budget (RM), Start date */}
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              {/* TODO 8: the other columns. Budget formatted like 12,500 (hint: toLocaleString("en-MY")) */}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
