// ============================================================
//  ATS Resume Builder — Dynamic Form Logic
// ============================================================

// ---- State ----
const state = {
    internships: [],
    projects: [],
    certs: [],
    skills: { Languages: [], Tech: [], Other: [] },
    education: []
};

let counters = { internship: 0, project: 0, cert: 0, education: 0 };

// ---- Templates ----
function internshipTemplate(id) {
    return `
    <div class="dynamic-entry" id="internship-${id}">
        <div class="entry-index">
            <span><i class="fa-solid fa-briefcase"></i> Entry #${id}</span>
            <button class="remove-entry-btn" onclick="removeEntry('internship', ${id})"><i class="fa-solid fa-trash"></i> Remove</button>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label>Role Title</label>
                <input type="text" data-field="role" data-type="internship" data-id="${id}" placeholder="SEP Intern" oninput="updatePreview()">
            </div>
            <div class="input-group">
                <label>Duration</label>
                <input type="text" data-field="duration" data-type="internship" data-id="${id}" placeholder="May 2023 – July 2023" oninput="updatePreview()">
            </div>
        </div>
        <div class="input-group">
            <label>Company</label>
            <input type="text" data-field="company" data-type="internship" data-id="${id}" placeholder="JP Morgan Chase & Co." oninput="updatePreview()">
        </div>
        <div class="input-group">
            <label>Description (one bullet per line)</label>
            <textarea rows="4" data-field="description" data-type="internship" data-id="${id}" placeholder="Contributed to...&#10;Improved user experience..." oninput="updatePreview()"></textarea>
        </div>
    </div>`;
}

function projectTemplate(id) {
    return `
    <div class="dynamic-entry" id="project-${id}">
        <div class="entry-index">
            <span><i class="fa-solid fa-code-branch"></i> Project #${id}</span>
            <button class="remove-entry-btn" onclick="removeEntry('project', ${id})"><i class="fa-solid fa-trash"></i> Remove</button>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label>Project Title</label>
                <input type="text" data-field="title" data-type="project" data-id="${id}" placeholder="Ekart App" oninput="updatePreview()">
            </div>
            <div class="input-group">
                <label>Duration</label>
                <input type="text" data-field="duration" data-type="project" data-id="${id}" placeholder="July 2022 – Aug 2022" oninput="updatePreview()">
            </div>
        </div>
        <div class="input-group">
            <label>Tech Stack</label>
            <input type="text" data-field="technology" data-type="project" data-id="${id}" placeholder="MERN Stack, React" oninput="updatePreview()">
        </div>
        <div class="input-group">
            <label>Description (one bullet per line)</label>
            <textarea rows="4" data-field="description" data-type="project" data-id="${id}" placeholder="Developed an e-commerce platform...&#10;Used MongoDB for..." oninput="updatePreview()"></textarea>
        </div>
        <div class="input-group">
            <label>GitHub Repository Link</label>
            <input type="text" data-field="githubLink" data-type="project" data-id="${id}" placeholder="https://github.com/..." oninput="updatePreview()">
        </div>
    </div>`;
}

function certTemplate(id) {
    return `
    <div class="dynamic-entry" id="cert-${id}">
        <div class="entry-index">
            <span><i class="fa-solid fa-certificate"></i> Certificate #${id}</span>
            <button class="remove-entry-btn" onclick="removeEntry('cert', ${id})"><i class="fa-solid fa-trash"></i> Remove</button>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label>Certificate Name</label>
                <input type="text" data-field="name" data-type="cert" data-id="${id}" placeholder="Full Stack Web Development" oninput="updatePreview()">
            </div>
            <div class="input-group">
                <label>Date</label>
                <input type="text" data-field="date" data-type="cert" data-id="${id}" placeholder="August 2022" oninput="updatePreview()">
            </div>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label>Organization</label>
                <input type="text" data-field="organization" data-type="cert" data-id="${id}" placeholder="Edureka" oninput="updatePreview()">
            </div>
            <div class="input-group">
                <label>Certificate Link (optional)</label>
                <input type="text" data-field="link" data-type="cert" data-id="${id}" placeholder="https://..." oninput="updatePreview()">
            </div>
        </div>
    </div>`;
}

function educationTemplate(id) {
    return `
    <div class="dynamic-entry" id="education-${id}">
        <div class="entry-index">
            <span><i class="fa-solid fa-graduation-cap"></i> Education #${id}</span>
            <button class="remove-entry-btn" onclick="removeEntry('education', ${id})"><i class="fa-solid fa-trash"></i> Remove</button>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label>Institution</label>
                <input type="text" data-field="institution" data-type="education" data-id="${id}" placeholder="Shivalik College, Dehradun" oninput="updatePreview()">
            </div>
            <div class="input-group">
                <label>Years</label>
                <input type="text" data-field="graduationYear" data-type="education" data-id="${id}" placeholder="2020 – 2024" oninput="updatePreview()">
            </div>
        </div>
        <div class="input-row">
            <div class="input-group">
                <label>Degree / CGPA</label>
                <input type="text" data-field="degree" data-type="education" data-id="${id}" placeholder="Computer Science — CGPA: 9.23" oninput="updatePreview()">
            </div>
            <div class="input-group">
                <label>City, State</label>
                <input type="text" data-field="location" data-type="education" data-id="${id}" placeholder="Dehradun, Uttarakhand" oninput="updatePreview()">
            </div>
        </div>
    </div>`;
}

// ---- Add / Remove Entries ----
function addEntry(type) {
    counters[type]++;
    const id = counters[type];
    const container = document.getElementById(`${type === 'internship' ? 'internship' : type}Container`);
    let html = '';
    if (type === 'internship') html = internshipTemplate(id);
    else if (type === 'project') html = projectTemplate(id);
    else if (type === 'cert') html = certTemplate(id);
    else if (type === 'education') html = educationTemplate(id);
    container.insertAdjacentHTML('beforeend', html);
    updatePreview();
}

function removeEntry(type, id) {
    const el = document.getElementById(`${type}-${id}`);
    if (el) el.remove();
    updatePreview();
}

// ---- Skills Tag System ----
function addSkillTag(category) {
    const inputMap = { Languages: 'addLang', Tech: 'addTech', Other: 'addOther' };
    const input = document.getElementById(inputMap[category]);
    const value = input.value.trim();
    if (!value) return;

    if (!state.skills[category]) state.skills[category] = [];
    state.skills[category].push(value);
    input.value = '';

    renderSkillTags(category);
    updatePreview();
}

function removeSkillTag(category, index) {
    state.skills[category].splice(index, 1);
    renderSkillTags(category);
    updatePreview();
}

function renderSkillTags(category) {
    const containerMap = { Languages: 'tagsLanguages', Tech: 'tagsTech', Other: 'tagsOther' };
    const container = document.getElementById(containerMap[category]);
    container.innerHTML = state.skills[category]
        .map((skill, i) => `
            <span class="skill-tag">
                ${skill}
                <span class="remove-skill" onclick="removeSkillTag('${category}', ${i})">✕</span>
            </span>`)
        .join('');
}

// ---- Collect Entries from DOM ----
function collectEntries(type) {
    const container = document.getElementById(`${type}Container`);
    const entries = container.querySelectorAll('.dynamic-entry');
    return Array.from(entries).map(entry => {
        const obj = {};
        entry.querySelectorAll('[data-field]').forEach(el => {
            obj[el.dataset.field] = el.value || '';
        });
        return obj;
    });
}

// ---- Live Preview Rendering ----
function renderBullets(text) {
    if (!text) return '';
    return text.split('\n').map(l => l.trim()).filter(l => l)
        .map(l => `<li>${l}</li>`).join('');
}

function updatePreview() {
    // Header fields
    const simpleFields = ['fullName','location','email','phone','linkedin','github'];
    const previewMap = { fullName:'previewName', location:'previewLocation', email:'previewEmail', phone:'previewPhone', linkedin:'previewLinkedin', github:'previewGithub' };
    simpleFields.forEach(f => {
        const el = document.getElementById(f);
        const prev = document.getElementById(previewMap[f]);
        if (el && prev) prev.textContent = el.value || '…';
    });

    // Internship
    const internships = collectEntries('internship');
    const internshipHtml = internships.length === 0 ? '' : `
        <div class="rv-section-title">Internship</div>
        ${internships.map(e => `
            <div class="rv-item">
                <div class="rv-item-header">
                    <span class="rv-role">${e.role || 'Role'}</span>
                    <span class="rv-date">${e.duration || ''}</span>
                </div>
                <div class="rv-company">${e.company || 'Company'}</div>
                <ul class="rv-bullets">${renderBullets(e.description)}</ul>
            </div>`).join('')}`;
    document.getElementById('previewInternship').innerHTML = internshipHtml;

    // Projects
    const projects = collectEntries('project');
    const projectHtml = projects.length === 0 ? '' : `
        <div class="rv-section-title">Projects</div>
        ${projects.map(p => `
            <div class="rv-item">
                <div class="rv-item-header">
                    <span>
                        <span class="rv-proj-name">${p.title || 'Project'}</span>
                        ${p.technology ? `<span class="rv-proj-tech"> | <em>${p.technology}</em></span>` : ''}
                    </span>
                    <span class="rv-date">${p.duration || ''}</span>
                </div>
                <ul class="rv-bullets">${renderBullets(p.description)}</ul>
                ${p.githubLink ? `<div class="rv-proj-link">Github Repository Link: &nbsp;<strong>${p.githubLink}</strong></div>` : ''}
            </div>`).join('')}`;
    document.getElementById('previewProjects').innerHTML = projectHtml;

    // Certificates
    const certs = collectEntries('cert');
    const certHtml = certs.length === 0 ? '' : `
        <div class="rv-section-title">Certificates</div>
        ${certs.map(c => `
            <div class="rv-item">
                <div class="rv-item-header">
                    <span class="rv-cert-name">${c.name || 'Certificate'}</span>
                    <span class="rv-date">${c.date || ''}</span>
                </div>
                <div class="rv-company">${c.organization || ''}${c.link ? ` &nbsp;— ${c.link}` : ''}</div>
            </div>`).join('')}`;
    document.getElementById('previewCerts').innerHTML = certHtml;

    // Skills
    const langs = state.skills.Languages.join(', ');
    const tech = state.skills.Tech.join(', ');
    const other = state.skills.Other.join(', ');
    const skillsHtml = (langs || tech || other) ? `
        <div class="rv-section-title">Technical Skills</div>
        ${langs  ? `<div class="rv-skills-row"><span class="rv-skill-label">Languages</span>: ${langs}</div>` : ''}
        ${tech   ? `<div class="rv-skills-row"><span class="rv-skill-label">Technologies/Frameworks</span>: ${tech}</div>` : ''}
        ${other  ? `<div class="rv-skills-row"><span class="rv-skill-label">Skills</span>: ${other}</div>` : ''}` : '';
    document.getElementById('previewSkills').innerHTML = skillsHtml;

    // Education
    const education = collectEntries('education');
    const eduHtml = education.length === 0 ? '' : `
        <div class="rv-section-title">Education</div>
        ${education.map(e => `
            <div class="rv-item">
                <div class="rv-item-header">
                    <span class="rv-edu-institution">${e.institution || 'Institution'}</span>
                    <span class="rv-date">${e.graduationYear || ''}</span>
                </div>
                <div class="rv-edu-sub">
                    <span>${e.degree || ''}</span>
                    <span>${e.location || ''}</span>
                </div>
            </div>`).join('')}`;
    document.getElementById('previewEducation').innerHTML = eduHtml;
}

// ---- Download PDF ----
async function downloadPdf() {
    const personalInfo = {
        fullName:  document.getElementById('fullName').value,
        location:  document.getElementById('location').value,
        email:     document.getElementById('email').value,
        phone:     document.getElementById('phone').value,
        linkedin:  document.getElementById('linkedin').value,
        github:    document.getElementById('github').value,
        objective: ''
    };

    const resumeData = {
        personalInfo,
        experience: collectEntries('internship'),
        projects:   collectEntries('project'),
        certificates: collectEntries('cert'),
        education:  collectEntries('education'),
        skills: {
            languages:    state.skills.Languages.join(', '),
            technologies: state.skills.Tech.join(', '),
            other:        state.skills.Other.join(', ')
        }
    };

    document.getElementById('loader').classList.remove('hidden');

    try {
        const response = await fetch('/api/resume/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(resumeData)
        });

        if (!response.ok) throw new Error('PDF generation failed');

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${personalInfo.fullName.replace(/\s+/g,'_')}_Resume.pdf`;
        document.body.appendChild(a); a.click(); a.remove();
        window.URL.revokeObjectURL(url);

    } catch (err) {
        console.error(err);
        alert('Failed to generate PDF. Check browser console.');
    } finally {
        document.getElementById('loader').classList.add('hidden');
    }
}

// ---- Skill tag on Enter key ----
function setupEnterKey(inputId, category) {
    document.getElementById(inputId)?.addEventListener('keydown', e => {
        if (e.key === 'Enter') { e.preventDefault(); addSkillTag(category); }
    });
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
    // Wire header inputs to live preview
    ['fullName','location','email','phone','linkedin','github'].forEach(id => {
        document.getElementById(id)?.addEventListener('input', updatePreview);
    });

    // Enter key for skills
    setupEnterKey('addLang', 'Languages');
    setupEnterKey('addTech', 'Tech');
    setupEnterKey('addOther', 'Other');

    // Download button
    document.getElementById('downloadBtn').addEventListener('click', downloadPdf);

    // Pre-seed one entry in each section for convenience
    addEntry('internship');
    addEntry('project');
    addEntry('cert');
    addEntry('education');
});
