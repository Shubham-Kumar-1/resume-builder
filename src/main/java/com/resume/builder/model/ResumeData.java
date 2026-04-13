package com.resume.builder.model;

import java.util.List;

public class ResumeData {
    private PersonalInfo personalInfo;
    private List<Education> education;
    private List<Experience> experience;
    private List<Project> projects;
    private List<Certificate> certificates;
    private Skills skills;

    public PersonalInfo getPersonalInfo() { return personalInfo; }
    public void setPersonalInfo(PersonalInfo personalInfo) { this.personalInfo = personalInfo; }

    public List<Education> getEducation() { return education; }
    public void setEducation(List<Education> education) { this.education = education; }

    public List<Experience> getExperience() { return experience; }
    public void setExperience(List<Experience> experience) { this.experience = experience; }

    public List<Project> getProjects() { return projects; }
    public void setProjects(List<Project> projects) { this.projects = projects; }

    public List<Certificate> getCertificates() { return certificates; }
    public void setCertificates(List<Certificate> certificates) { this.certificates = certificates; }

    public Skills getSkills() { return skills; }
    public void setSkills(Skills skills) { this.skills = skills; }

    // ---- Personal Info ----
    public static class PersonalInfo {
        private String fullName;
        private String email;
        private String phone;
        private String location;
        private String linkedin;
        private String github;
        private String objective;

        public String getFullName() { return fullName; }
        public void setFullName(String fullName) { this.fullName = fullName; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getPhone() { return phone; }
        public void setPhone(String phone) { this.phone = phone; }

        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }

        public String getLinkedin() { return linkedin; }
        public void setLinkedin(String linkedin) { this.linkedin = linkedin; }

        public String getGithub() { return github; }
        public void setGithub(String github) { this.github = github; }

        public String getObjective() { return objective; }
        public void setObjective(String objective) { this.objective = objective; }
    }

    // ---- Education ----
    public static class Education {
        private String institution;
        private String degree;
        private String graduationYear;
        private String location;

        public String getInstitution() { return institution; }
        public void setInstitution(String institution) { this.institution = institution; }

        public String getDegree() { return degree; }
        public void setDegree(String degree) { this.degree = degree; }

        public String getGraduationYear() { return graduationYear; }
        public void setGraduationYear(String graduationYear) { this.graduationYear = graduationYear; }

        public String getLocation() { return location; }
        public void setLocation(String location) { this.location = location; }
    }

    // ---- Experience ----
    public static class Experience {
        private String company;
        private String role;
        private String duration;
        private String description;

        public String getCompany() { return company; }
        public void setCompany(String company) { this.company = company; }

        public String getRole() { return role; }
        public void setRole(String role) { this.role = role; }

        public String getDuration() { return duration; }
        public void setDuration(String duration) { this.duration = duration; }

        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }
    }

    // ---- Project ----
    public static class Project {
        private String title;
        private String technology;
        private String duration;
        private String description;
        private String githubLink;

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }

        public String getTechnology() { return technology; }
        public void setTechnology(String technology) { this.technology = technology; }

        public String getDuration() { return duration; }
        public void setDuration(String duration) { this.duration = duration; }

        public String getDescription() { return description; }
        public void setDescription(String description) { this.description = description; }

        public String getGithubLink() { return githubLink; }
        public void setGithubLink(String githubLink) { this.githubLink = githubLink; }
    }

    // ---- Certificate ----
    public static class Certificate {
        private String name;
        private String organization;
        private String date;
        private String link;

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getOrganization() { return organization; }
        public void setOrganization(String organization) { this.organization = organization; }

        public String getDate() { return date; }
        public void setDate(String date) { this.date = date; }

        public String getLink() { return link; }
        public void setLink(String link) { this.link = link; }
    }

    // ---- Skills ----
    public static class Skills {
        private String languages;
        private String technologies;
        private String other;

        public String getLanguages() { return languages; }
        public void setLanguages(String languages) { this.languages = languages; }

        public String getTechnologies() { return technologies; }
        public void setTechnologies(String technologies) { this.technologies = technologies; }

        public String getOther() { return other; }
        public void setOther(String other) { this.other = other; }
    }
}
