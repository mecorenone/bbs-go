package services

import (
	"github.com/mlogclub/mlog/model"
	"github.com/mlogclub/mlog/repositories"
	"github.com/mlogclub/simple"
)

type TopicTagService struct {
	TopicTagRepository *repositories.TopicTagRepository
}

func NewTopicTagService() *TopicTagService {
	return &TopicTagService{
		TopicTagRepository: repositories.NewTopicTagRepository(),
	}
}

func (this *TopicTagService) Get(id int64) *model.TopicTag {
	return this.TopicTagRepository.Get(simple.GetDB(), id)
}

func (this *TopicTagService) Take(where ...interface{}) *model.TopicTag {
	return this.TopicTagRepository.Take(simple.GetDB(), where...)
}

func (this *TopicTagService) QueryCnd(cnd *simple.QueryCnd) (list []model.TopicTag, err error) {
	return this.TopicTagRepository.QueryCnd(simple.GetDB(), cnd)
}

func (this *TopicTagService) Query(queries *simple.ParamQueries) (list []model.TopicTag, paging *simple.Paging) {
	return this.TopicTagRepository.Query(simple.GetDB(), queries)
}

func (this *TopicTagService) Create(t *model.TopicTag) error {
	return this.TopicTagRepository.Create(simple.GetDB(), t)
}

func (this *TopicTagService) Update(t *model.TopicTag) error {
	return this.TopicTagRepository.Update(simple.GetDB(), t)
}

func (this *TopicTagService) Updates(id int64, columns map[string]interface{}) error {
	return this.TopicTagRepository.Updates(simple.GetDB(), id, columns)
}

func (this *TopicTagService) UpdateColumn(id int64, name string, value interface{}) error {
	return this.TopicTagRepository.UpdateColumn(simple.GetDB(), id, name, value)
}

func (this *TopicTagService) Delete(id int64) {
	this.TopicTagRepository.Delete(simple.GetDB(), id)
}