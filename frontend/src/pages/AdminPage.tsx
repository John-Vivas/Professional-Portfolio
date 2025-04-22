import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, LogOut } from 'lucide-react';
import PageWrapper from '../components/shared/PageWrapper';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import Section from '../components/shared/Section';
import Button from '../components/shared/Button';
import ProjectsList from '../components/admin/ProjectsList';
import ProjectForm from '../components/admin/ProjectForm';
import { useProjects } from '../hooks/useProjects';
import { useAuth } from '../hooks/useAuth';
import { Project } from '../types';

const AdminPage: React.FC = () => {
  const { projects, isLoading, error } = useProjects();
  const { isAuthenticated, isLoading: authLoading, logout } = useAuth();
  const navigate = useNavigate();

  // const [refreshCounter, setRefreshCounter] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | undefined>(undefined);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, authLoading, navigate]);

  const refreshProjects = () => {
    // setRefreshCounter(prev => prev + 1);
  };

  const handleAddNew = () => {
    setEditingProject(undefined);
    setShowForm(true);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    refreshProjects();
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  if (authLoading) {
    return (
      <PageWrapper>
        <Navbar />
        <main>
          <Section>
            <div className="flex justify-center py-12">
              <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          </Section>
        </main>
        <Footer />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Navbar />
      <main>
        <Section title="Admin Dashboard">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Manage Projects</h2>
            <div className="flex gap-4">
              <Button variant="primary" onClick={handleAddNew}>
                <Plus size={18} className="mr-2" /> Add Project
              </Button>
              <Button variant="ghost" onClick={handleLogout}>
                <LogOut size={18} className="mr-2" /> Logout
              </Button>
            </div>
          </div>

          {showForm ? (
            <div className="mb-8">
              <ProjectForm
                project={editingProject}
                onSuccess={handleFormSuccess}
                onCancel={handleFormCancel}
              />
            </div>
          ) : null}

          {isLoading ? (
            <div className="flex justify-center py-8">
              <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center text-error p-8">
              <p>{error}</p>
            </div>
          ) : (
            <div className="bg-primary/20 rounded-lg overflow-hidden">
              <ProjectsList
                projects={projects}
                onEdit={handleEdit}
                onRefresh={refreshProjects}
              />
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </PageWrapper>
  );
};

export default AdminPage;